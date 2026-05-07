const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const vm = require("node:vm");
const express = require("express");
const { Server } = require("socket.io");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: true },
});

app.use((req, res, next) => {
  const blocked = new Set(["server.js", "package.json", "package-lock.json", ".gitignore", "README.md"]);
  const requested = path.basename(req.path);
  if (blocked.has(requested)) return res.sendStatus(404);
  next();
});
app.use(express.static(PUBLIC_DIR));

const starterPlayers = loadStarterPlayers();

let draft = createDraft();

function loadStarterPlayers() {
  const clientCode = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
  const playersMatch = clientCode.match(/const starterPlayers = (\[[\s\S]*?\n\])\.map/);
  const ratingsMatch = clientCode.match(/const nba2kRatings = ({[\s\S]*?\n});/);
  if (!playersMatch || !ratingsMatch) {
    throw new Error("Could not load player data from app.js");
  }
  const rows = vm.runInNewContext(playersMatch[1]);
  const ratings = vm.runInNewContext(`(${ratingsMatch[1]})`);
  return rows.map(([name, team], index) => ({
    id: `${name}-${team}-${index}`,
    rank: index + 1,
    name,
    team,
    photo: getHeadshotUrl(name),
    rating2k: get2kRating(name, ratings),
  }));
}

function createDraft(teamCount = 6, rosterSize = 10, players = starterPlayers) {
  return {
    teamCount,
    rosterSize,
    players,
    drafted: [],
    teamNames: Array.from({ length: teamCount }, (_, index) => `Team ${index + 1}`),
    teamOwners: Array.from({ length: teamCount }, () => null),
    commissionerId: null,
  };
}

function currentPickIndex() {
  return draft.drafted.length;
}

function currentRound() {
  return Math.floor(currentPickIndex() / draft.teamCount) + 1;
}

function currentTeamIndex() {
  const slot = currentPickIndex() % draft.teamCount;
  return currentRound() % 2 === 1 ? slot : draft.teamCount - 1 - slot;
}

function isDraftComplete() {
  return draft.drafted.length >= draft.teamCount * draft.rosterSize;
}

function canEditTeam(participantId, teamIndex) {
  return draft.teamOwners[teamIndex] === participantId;
}

function canManageDraft(participantId) {
  return !draft.commissionerId || draft.commissionerId === participantId;
}

function broadcast() {
  io.emit("draft:state", {
    ...draft,
    currentRound: currentRound(),
    currentPick: draft.drafted.length + 1,
    currentTeamIndex: isDraftComplete() ? null : currentTeamIndex(),
    complete: isDraftComplete(),
  });
}

function safeNumber(value, fallback, min, max) {
  const next = Number(value);
  if (!Number.isFinite(next)) return fallback;
  return Math.max(min, Math.min(max, Math.floor(next)));
}

function normalizeName(name) {
  return String(name)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['\u2019`.]/g, " ")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();
}

function get2kRating(name, ratings) {
  return ratings[normalizeName(name)] || null;
}

function getHeadshotUrl(name) {
  const parts = String(name)
    .replace(/\b(jr|sr|ii|iii|iv)\.?$/i, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .match(/[a-z]+/g) || [];
  if (parts.length < 2) return "";
  return `https://www.basketball-reference.com/req/202106291/images/headshots/${parts[parts.length - 1].slice(0, 5)}${parts[0].slice(0, 2)}01.jpg`;
}

function parseImportedPlayers(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 300)
    .map((line, index) => {
      const cleaned = line.replace(/^\d+[\s,.)-]+/, "");
      const parts = cleaned.includes(",") ? cleaned.split(",") : cleaned.split(/\s+-\s+/);
      const name = (parts[0] || cleaned).trim();
      const team = (parts[1] || "NBA").trim().toUpperCase();
      const photo = (parts[2] || "").trim() || getHeadshotUrl(name);
      const rating2k = Number((parts[3] || "").trim()) || null;
      return { id: `${name}-${team}-${index}`, rank: index + 1, name, team, photo, rating2k };
    });
}

io.on("connection", (socket) => {
  const participantId = String(socket.handshake.auth.participantId || socket.id);
  socket.data.participantId = participantId;
  if (!draft.commissionerId) draft.commissionerId = participantId;

  socket.emit("draft:hello", { participantId, commissionerId: draft.commissionerId });
  broadcast();

  socket.on("draft:claimTeam", (teamIndex) => {
    const index = safeNumber(teamIndex, -1, 0, draft.teamCount - 1);
    if (index < 0) return;
    const alreadyOwnsTeam = draft.teamOwners.includes(participantId);
    if (!draft.teamOwners[index] && !alreadyOwnsTeam) {
      draft.teamOwners[index] = participantId;
      broadcast();
    }
  });

  socket.on("draft:renameTeam", ({ teamIndex, name }) => {
    const index = safeNumber(teamIndex, -1, 0, draft.teamCount - 1);
    if (index < 0 || !canEditTeam(participantId, index)) return;
    draft.teamNames[index] = String(name || `Team ${index + 1}`).trim().slice(0, 32);
    broadcast();
  });

  socket.on("draft:pick", (playerId) => {
    if (isDraftComplete()) return;
    const teamIndex = currentTeamIndex();
    if (!canEditTeam(participantId, teamIndex)) return;
    const player = draft.players.find((item) => item.id === playerId);
    if (!player || draft.drafted.some((pick) => pick.player.id === playerId)) return;
    draft.drafted.push({
      player,
      teamIndex,
      pick: draft.drafted.length + 1,
      round: currentRound(),
    });
    broadcast();
  });

  socket.on("draft:undo", () => {
    if (!canManageDraft(participantId)) return;
    draft.drafted.pop();
    broadcast();
  });

  socket.on("draft:new", ({ teamCount, rosterSize }) => {
    if (!canManageDraft(participantId)) return;
    draft = createDraft(
      safeNumber(teamCount, 6, 2, 6),
      safeNumber(rosterSize, 10, 1, 20),
      draft.players
    );
    draft.commissionerId = participantId;
    broadcast();
  });

  socket.on("draft:restorePlayers", () => {
    if (!canManageDraft(participantId)) return;
    draft.players = starterPlayers;
    draft.drafted = [];
    broadcast();
  });

  socket.on("draft:importPlayers", (text) => {
    if (!canManageDraft(participantId)) return;
    const players = parseImportedPlayers(text);
    if (!players.length) return;
    draft.players = players;
    draft.drafted = [];
    broadcast();
  });
});

server.listen(PORT, HOST, () => {
  console.log(`NBA draft room running at http://localhost:${PORT}`);
});
