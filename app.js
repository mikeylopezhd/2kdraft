const STORAGE_KEY = "nba-snake-draft-v1";
const PARTICIPANT_KEY = "nba-snake-draft-participant";

const starterPlayers = [
  ["Nikola Jokic","DEN"],["Victor Wembanyama","SAS"],["Shai Gilgeous-Alexander","OKC"],["Luka Doncic","LAL"],["Giannis Antetokounmpo","MIL"],["Anthony Edwards","MIN"],["Cade Cunningham","DET"],["Anthony Davis","DAL"],["Trae Young","ATL"],["Devin Booker","PHX"],["Jalen Brunson","NYK"],["Stephen Curry","GSW"],["Kevin Durant","HOU"],["Domantas Sabonis","SAC"],["Tyrese Maxey","PHI"],["Donovan Mitchell","CLE"],["Jalen Williams","OKC"],["Alperen Sengun","HOU"],["Paolo Banchero","ORL"],["Chet Holmgren","OKC"],["LeBron James","LAL"],["Scottie Barnes","TOR"],["Evan Mobley","CLE"],["LaMelo Ball","CHA"],["Jalen Johnson","ATL"],["Karl-Anthony Towns","NYK"],["James Harden","LAC"],["Bam Adebayo","MIA"],["De'Aaron Fox","SAS"],["Pascal Siakam","IND"],["Amen Thompson","HOU"],["Jaren Jackson Jr.","MEM"],["Jaylen Brown","BOS"],["Ja Morant","MEM"],["Franz Wagner","ORL"],["Derrick White","BOS"],["Josh Giddey","CHI"],["Joel Embiid","PHI"],["Zion Williamson","NOP"],["Desmond Bane","ORL"],["Cooper Flagg","DAL"],["Trey Murphy III","NOP"],["Austin Reaves","LAL"],["Jamal Murray","DEN"],["Darius Garland","CLE"],["Tyler Herro","MIA"],["Ivica Zubac","LAC"],["Lauri Markkanen","UTA"],["Kawhi Leonard","LAC"],["Deni Avdija","POR"],["Mikal Bridges","NYK"],["Myles Turner","MIL"],["Brandon Miller","CHA"],["Jalen Duren","DET"],["Jalen Green","PHX"],["Coby White","CHI"],["Dyson Daniels","ATL"],["Julius Randle","MIN"],["Walker Kessler","UTA"],["Alex Sarr","WAS"],["Nikola Vucevic","CHI"],["Jordan Poole","NOP"],["Zach LaVine","SAC"],["Josh Hart","NYK"],["Immanuel Quickley","TOR"],["OG Anunoby","NYK"],["Kristaps Porzingis","ATL"],["Jimmy Butler","GSW"],["Michael Porter Jr.","BKN"],["Jarrett Allen","CLE"],["Brandon Ingram","TOR"],["Paul George","PHI"],["DeMar DeRozan","SAC"],["Onyeka Okongwu","ATL"],["Cam Thomas","BKN"],["Rudy Gobert","MIN"],["RJ Barrett","TOR"],["Naz Reid","MIN"],["Jakob Poeltl","TOR"],["Christian Braun","DEN"],["Payton Pritchard","BOS"],["Donovan Clingan","POR"],["Isaiah Hartenstein","OKC"],["Fred VanVleet","HOU"],["Anfernee Simons","BOS"],["Nic Claxton","BKN"],["Shaedon Sharpe","POR"],["Kel'el Ware","MIA"],["Keegan Murray","SAC"],["Devin Vassell","SAS"],["Andrew Nembhard","IND"],["Scoot Henderson","POR"],["Jalen Suggs","ORL"],["Mark Williams","PHX"],["Deandre Ayton","LAL"],["CJ McCollum","WAS"],["Draymond Green","GSW"],["Matas Buzelis","CHI"],["Stephon Castle","SAS"],["Brandin Podziemski","GSW"],["Cameron Johnson","DEN"],["Bobby Portis","MIL"],["Jaden McDaniels","MIN"],["Andrew Wiggins","MIA"],["Toumani Camara","POR"],["D'Angelo Russell","DAL"],["Tari Eason","HOU"],["Ausar Thompson","DET"],["Jaden Ivey","DET"],["John Collins","LAC"],["Keyonte George","UTA"],["Bilal Coulibaly","WAS"],["Kyle Filipowski","UTA"],["Bennedict Mathurin","IND"],["Norman Powell","MIA"],["Zach Edey","MEM"],["Dereck Lively II","DAL"],["Santi Aldama","MEM"],["Tobias Harris","DET"],["Daniel Gafford","DAL"],["T.J. McConnell","IND"],["Herbert Jones","NOP"],["Kyle Kuzma","MIL"],["Cason Wallace","OKC"],["Isaiah Collier","UTA"],["Bradley Beal","LAC"],["Yves Missi","NOP"],["Donte DiVincenzo","MIN"],["Aaron Gordon","DEN"],["Bub Carrington","WAS"],["Zaccharie Risacher","ATL"],["Jabari Smith Jr.","HOU"],["P.J. Washington","DAL"],["Aaron Nesmith","IND"],["Scotty Pippen Jr.","MEM"],["Dylan Harper","SAS"],["Jaylen Wells","MEM"],["Jrue Holiday","POR"],["Cam Whitmore","WAS"],["Kyshawn George","WAS"],["Ayo Dosunmu","CHI"],["Collin Sexton","CHA"],["Chris Paul","LAC"],["Jonathan Kuminga","GSW"],["Jeremy Sochan","SAS"],["De'Andre Hunter","CLE"],["Tyus Jones","ORL"],["Klay Thompson","DAL"],["Jared McCain","PHI"],["Kon Knueppel","CHA"],["Lonzo Ball","CLE"],["Keon Ellis","SAC"],["Sam Hauser","BOS"],["Russell Westbrook","FA"],["Taylor Hendricks","UTA"],["Gradey Dick","TOR"],["Ace Bailey","UTA"],["Jerami Grant","POR"],["Dillon Brooks","PHX"],["Quentin Grimes","PHI"],["Reed Sheppard","HOU"],["Wendell Carter Jr.","ORL"],["Alex Caruso","OKC"],["Ty Jerome","MEM"],["Luguentz Dort","OKC"],["Jordan Clarkson","NYK"],["Kyrie Irving","DAL"],["Gary Trent Jr.","MIL"],["Brook Lopez","LAC"],["Davion Mitchell","MIA"],["Egor Demin","BKN"],["Obi Toppin","IND"],["Aaron Wiggins","OKC"],["Kelly Oubre Jr.","PHI"],["Anthony Black","ORL"],["Khris Middleton","WAS"],["Tre Johnson","WAS"],["Ryan Kalkbrenner","CHA"],["Nickeil Alexander-Walker","ATL"],["Dennis Schroder","SAC"],["Caris LeVert","DET"],["Neemias Queta","BOS"],["Peyton Watson","DEN"],["Noah Clowney","BKN"],["Moses Moody","GSW"],["Buddy Hield","GSW"],["Dejounte Murray","NOP"],["VJ Edgecombe","PHI"],["Khaman Maluach","PHX"],["Max Strus","CLE"],["Royce O'Neale","PHX"],["Grant Williams","CHA"],["Yang Hansen","POR"],["Jaime Jaquez Jr.","MIA"],["Rui Hachimura","LAL"],["Cole Anthony","MIL"],["Jarace Walker","IND"],["Brandon Clarke","MEM"],["Corey Kispert","WAS"],["Jaden Hardy","DAL"]
].map(([name, team], index) => ({ id: `${name}-${team}-${index}`, rank: index + 1, name, team, photo: getHeadshotUrl(name) }));

const nba2kRatings = {
  "nikola jokic": 98,
  "shai gilgeous alexander": 98,
  "victor wembanyama": 97,
  "luka doncic": 97,
  "giannis antetokounmpo": 97,
  "anthony edwards": 96,
  "stephen curry": 95,
  "donovan mitchell": 95,
  "kawhi leonard": 95,
  "cade cunningham": 95,
  "jaylen brown": 95,
  "tyrese maxey": 94,
  "jayson tatum": 93,
  "kevin durant": 93,
  "jalen brunson": 93,
  "tyrese haliburton": 93,
  "devin booker": 93,
  "lebron james": 92,
  "anthony davis": 92,
  "joel embiid": 92,
  "karl anthony towns": 90,
  "kyrie irving": 90,
  "james harden": 90,
  "trae young": 89,
  "bam adebayo": 89,
  "jamal murray": 89,
  "scottie barnes": 89,
  "jalen johnson": 89,
  "paolo banchero": 88,
  "damian lillard": 88,
  "alperen sengun": 88,
  "lamelo ball": 88,
  "jimmy butler": 88,
  "austin reaves": 88,
  "og anunoby": 88,
  "deni avdija": 88,
  "cooper flagg": 88,
  "ja morant": 87,
  "jalen williams": 87,
  "evan mobley": 87,
  "pascal siakam": 87,
  "chet holmgren": 87,
  "amen thompson": 87,
  "tyler herro": 87,
  "franz wagner": 87,
  "de aaron fox": 87,
  "lauri markkanen": 87,
  "stephon castle": 87,
  "brandon miller": 87,
  "jalen duren": 87,
  "keyonte george": 87,
  "jaren jackson": 86,
  "jaren jackson jr": 86,
  "domantas sabonis": 86,
  "zion williamson": 86,
  "julius randle": 86,
  "brandon ingram": 86,
  "jarrett allen": 86,
  "desmond bane": 86,
  "michael porter": 86,
  "michael porter jr": 86,
  "kon knueppel": 86,
  "darius garland": 85,
  "ivica zubac": 85,
  "derrick white": 85,
  "rudy gobert": 85,
  "norman powell": 85,
  "trey murphy": 85,
  "trey murphy iii": 85,
  "jaden mcdaniels": 85,
  "ayo dosunmu": 85,
  "demar derozan": 84,
  "dejounte murray": 84,
  "immanuel quickley": 84,
  "alexandre sarr": 84,
  "alex sarr": 84,
  "saddiq bey": 84,
  "dillon brooks": 84,
  "ausar thompson": 84,
  "zach lavine": 83,
  "kristaps porzingis": 83,
  "dyson daniels": 83,
  "rj barrett": 83,
  "josh giddey": 83,
  "aaron gordon": 83,
  "isaiah hartenstein": 83,
  "walker kessler": 83,
  "cj mccollum": 83,
  "paul george": 83,
  "shaedon sharpe": 83,
  "vj edgecombe": 83,
  "nickeil alexander walker": 83,
  "donovan clingan": 83,
  "tobias harris": 83,
  "ty jerome": 83,
  "mikal bridges": 82,
  "jalen green": 82,
  "jrue holiday": 82,
  "josh hart": 82,
  "onyeka okongwu": 82,
  "andrew nembhard": 82,
  "peyton watson": 82,
  "payton pritchard": 82,
  "anthony black": 82,
};

const participantId = getParticipantId();
const socket = window.io ? window.io({ auth: { participantId } }) : null;
let serverMode = false;
const state = normalizeState(loadState() || createState());

const els = {
  teamCount: document.querySelector("#teamCount"),
  rosterSize: document.querySelector("#rosterSize"),
  newDraftBtn: document.querySelector("#newDraftBtn"),
  undoBtn: document.querySelector("#undoBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  restoreBtn: document.querySelector("#restoreBtn"),
  importBtn: document.querySelector("#importBtn"),
  playerSearch: document.querySelector("#playerSearch"),
  playerList: document.querySelector("#playerList"),
  teamsPanel: document.querySelector("#teamsPanel"),
  roundLabel: document.querySelector("#roundLabel"),
  pickLabel: document.querySelector("#pickLabel"),
  turnLabel: document.querySelector("#turnLabel"),
  roomLabel: document.querySelector("#roomLabel"),
  importText: document.querySelector("#importText"),
  exportDialog: document.querySelector("#exportDialog"),
  exportText: document.querySelector("#exportText"),
};

function createState(teamCount = 6, rosterSize = 10, players = starterPlayers) {
  return {
    teamCount,
    rosterSize,
    players,
    drafted: [],
    teamNames: Array.from({ length: teamCount }, (_, i) => `Team ${i + 1}`),
    teamOwners: Array.from({ length: teamCount }, () => null),
    commissionerId: participantId,
  };
}

function getParticipantId() {
  const existing = localStorage.getItem(PARTICIPANT_KEY);
  if (existing) return existing;
  const next = globalThis.crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  localStorage.setItem(PARTICIPANT_KEY, next);
  return next;
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function normalizeState(savedState) {
  savedState.players = hydratePlayers(savedState.players);
  savedState.drafted = savedState.drafted.map((pick) => ({
    ...pick,
    player: savedState.players.find((player) => player.id === pick.player.id) || hydratePlayers([pick.player])[0],
  }));
  savedState.teamNames = Array.from({ length: savedState.teamCount }, (_, index) => savedState.teamNames[index] || `Team ${index + 1}`);
  savedState.teamOwners = Array.from({ length: savedState.teamCount }, (_, index) => savedState.teamOwners?.[index] || null);
  savedState.commissionerId = savedState.commissionerId || participantId;
  return savedState;
}

function hydratePlayers(players) {
  return players.map((player) => ({
    ...player,
    photo: player.photo || getHeadshotUrl(player.name),
    rating2k: player.rating2k || get2kRating(player.name),
  }));
}

function saveState() {
  if (serverMode) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentPickIndex() {
  return state.drafted.length;
}

function currentRound() {
  return Math.floor(currentPickIndex() / state.teamCount) + 1;
}

function currentTeamIndex() {
  const round = currentRound();
  const slot = currentPickIndex() % state.teamCount;
  return round % 2 === 1 ? slot : state.teamCount - 1 - slot;
}

function activeTeamIndex() {
  if (serverMode) return state.currentTeamIndex;
  return isDraftComplete() ? null : currentTeamIndex();
}

function isCommissioner() {
  return !serverMode || state.commissionerId === participantId;
}

function canEditTeam(teamIndex) {
  return !serverMode || state.teamOwners?.[teamIndex] === participantId;
}

function canDraftCurrentPick() {
  const teamIndex = activeTeamIndex();
  return teamIndex !== null && canEditTeam(teamIndex);
}

function isDraftComplete() {
  return state.drafted.length >= state.teamCount * state.rosterSize;
}

function draftPlayer(playerId) {
  if (serverMode) {
    socket.emit("draft:pick", playerId);
    return;
  }
  if (isDraftComplete()) return;
  const player = state.players.find((item) => item.id === playerId);
  if (!player || state.drafted.some((pick) => pick.player.id === playerId)) return;
  state.drafted.push({
    player,
    teamIndex: currentTeamIndex(),
    pick: state.drafted.length + 1,
    round: currentRound(),
  });
  saveState();
  render();
}

function undoPick() {
  if (serverMode) {
    socket.emit("draft:undo");
    return;
  }
  state.drafted.pop();
  saveState();
  render();
}

function resetDraft() {
  const teamCount = Number(els.teamCount.value);
  const rosterSize = Number(els.rosterSize.value);
  if (serverMode) {
    socket.emit("draft:new", { teamCount, rosterSize });
    return;
  }
  Object.assign(state, createState(teamCount, rosterSize, state.players));
  saveState();
  render();
}

function restorePlayers() {
  if (serverMode) {
    socket.emit("draft:restorePlayers");
    return;
  }
  state.players = hydratePlayers(starterPlayers);
  state.drafted = [];
  saveState();
  render();
}

function importPlayers() {
  const rows = els.importText.value.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  if (!rows.length) return;
  if (serverMode) {
    socket.emit("draft:importPlayers", els.importText.value);
    els.importText.value = "";
    return;
  }
  state.players = rows.map((line, index) => {
    const cleaned = line.replace(/^\d+[\s,.)-]+/, "");
    const parts = cleaned.includes(",") ? cleaned.split(",") : cleaned.split(/\s+-\s+/);
    const name = (parts[0] || cleaned).trim();
    const team = (parts[1] || "NBA").trim().toUpperCase();
    const photo = (parts[2] || "").trim() || getHeadshotUrl(name);
    const rating2k = Number((parts[3] || "").trim()) || get2kRating(name);
    return { id: `${name}-${team}-${index}`, rank: index + 1, name, team, photo, rating2k };
  }).slice(0, 300);
  state.drafted = [];
  els.importText.value = "";
  saveState();
  render();
}

function exportDraft() {
  const lines = [`NBA Snake Draft`, `Teams: ${state.teamCount}`, `Roster spots: ${state.rosterSize}`, ""];
  Array.from({ length: state.teamCount }).forEach((_, teamIndex) => {
    lines.push(`${state.teamNames[teamIndex]}`);
    getRoster(teamIndex).forEach((pick) => {
      const rating = pick.player.rating2k ? `, 2K ${pick.player.rating2k}` : "";
      lines.push(`  ${pick.round}.${pick.pick} ${pick.player.name} (${pick.player.team}${rating})`);
    });
    lines.push("");
  });
  lines.push("Pick history");
  state.drafted.forEach((pick) => {
    const rating = pick.player.rating2k ? `, 2K ${pick.player.rating2k}` : "";
    lines.push(`${pick.pick}. ${state.teamNames[pick.teamIndex]} - ${pick.player.name} (${pick.player.team}${rating})`);
  });
  els.exportText.value = lines.join("\n");
  els.exportDialog.showModal();
}

function getRoster(teamIndex) {
  return state.drafted.filter((pick) => pick.teamIndex === teamIndex);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function getHeadshotUrl(name) {
  const parts = name
    .replace(/\b(jr|sr|ii|iii|iv)\.?$/i, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .match(/[a-z]+/g) || [];
  if (parts.length < 2) return "";
  const first = parts[0].slice(0, 2);
  const last = parts[parts.length - 1].slice(0, 5);
  return `https://www.basketball-reference.com/req/202106291/images/headshots/${last}${first}01.jpg`;
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

function get2kRating(name) {
  return nba2kRatings[normalizeName(name)] || null;
}

function getInitials(name) {
  return (name.match(/\b[A-Za-z]/g) || []).slice(0, 2).join("").toUpperCase();
}

function playerPhotoMarkup(player) {
  return `
    <div class="headshot" data-initials="${escapeHtml(getInitials(player.name))}">
      ${player.photo ? `<img src="${escapeHtml(player.photo)}" alt="${escapeHtml(player.name)} headshot" loading="lazy" referrerpolicy="no-referrer" />` : ""}
    </div>
  `;
}

function playerRatingMarkup(player) {
  return player.rating2k ? `<span class="rating-badge" title="NBA 2K26 overall rating">2K ${player.rating2k}</span>` : "";
}

function renderClock() {
  const complete = isDraftComplete();
  const teamIndex = activeTeamIndex();
  els.roundLabel.textContent = complete ? "Draft complete" : `Round ${serverMode ? state.currentRound : currentRound()}`;
  els.pickLabel.textContent = complete ? `${state.drafted.length} picks` : `Pick ${state.drafted.length + 1}`;
  els.turnLabel.textContent = complete ? "All roster spots are filled" : `${state.teamNames[teamIndex]} is on the clock`;
  els.roomLabel.textContent = serverMode
    ? `${canDraftCurrentPick() ? "Your turn" : "Realtime room"} - ${isCommissioner() ? "Commissioner" : "Team member"}`
    : "Local draft";
  els.undoBtn.disabled = state.drafted.length === 0;
  els.newDraftBtn.disabled = serverMode && !isCommissioner();
  els.undoBtn.disabled = state.drafted.length === 0 || (serverMode && !isCommissioner());
  els.restoreBtn.disabled = serverMode && !isCommissioner();
  els.importBtn.disabled = serverMode && !isCommissioner();
}

function renderPlayers() {
  const draftedIds = new Set(state.drafted.map((pick) => pick.player.id));
  const query = els.playerSearch.value.trim().toLowerCase();
  const players = state.players
    .filter((player) => !draftedIds.has(player.id))
    .filter((player) => `${player.name} ${player.team}`.toLowerCase().includes(query));

  els.playerList.innerHTML = players.map((player) => `
    <article class="player-row">
      ${playerPhotoMarkup(player)}
      <div>
        <div class="player-name">${escapeHtml(player.name)} ${playerRatingMarkup(player)}</div>
        <small>#${player.rank} - ${escapeHtml(player.team)}</small>
      </div>
      <span class="team-tag">${escapeHtml(player.team)}</span>
      <button type="button" data-draft="${escapeHtml(player.id)}" ${canDraftCurrentPick() ? "" : "disabled"}>Draft</button>
    </article>
  `).join("") || `<div class="player-row"><span></span><strong>No players found</strong><span></span><span></span></div>`;
}

function renderTeams() {
  els.teamsPanel.innerHTML = Array.from({ length: state.teamCount }, (_, teamIndex) => {
    const roster = getRoster(teamIndex);
    const slots = Array.from({ length: state.rosterSize }, (_, slotIndex) => roster[slotIndex]);
    const owner = state.teamOwners?.[teamIndex];
    const isMine = owner === participantId;
    const hasTeam = state.teamOwners?.includes(participantId);
    return `
      <article class="team-card ${!isDraftComplete() && activeTeamIndex() === teamIndex ? "active" : ""} ${isMine ? "mine" : ""}">
        <div class="team-title">
          <input aria-label="Team ${teamIndex + 1} name" value="${escapeHtml(state.teamNames[teamIndex])}" data-team-name="${teamIndex}" ${canEditTeam(teamIndex) ? "" : "disabled"} />
          <span class="team-tag">${roster.length}/${state.rosterSize}</span>
        </div>
        ${serverMode ? `
          <div class="owner-row">
            <span>${isMine ? "Your team" : owner ? "Claimed" : "Open team"}</span>
            ${!owner && !hasTeam ? `<button class="secondary" type="button" data-claim-team="${teamIndex}">Claim</button>` : ""}
          </div>
        ` : ""}
        <ol class="roster">
          ${slots.map((pick, i) => pick ? `
            <li>
              <span>${i + 1}</span>
              ${playerPhotoMarkup(pick.player)}
              <strong>${escapeHtml(pick.player.name)} ${playerRatingMarkup(pick.player)}</strong>
              <span>${escapeHtml(pick.player.team)}</span>
            </li>
          ` : `
            <li class="empty-slot"><span>${i + 1}</span><span></span><span>Empty</span><span></span></li>
          `).join("")}
        </ol>
      </article>
    `;
  }).join("");
}

function render() {
  els.teamCount.value = String(state.teamCount);
  els.rosterSize.value = String(state.rosterSize);
  renderClock();
  renderPlayers();
  renderTeams();
}

els.newDraftBtn.addEventListener("click", resetDraft);
els.undoBtn.addEventListener("click", undoPick);
els.exportBtn.addEventListener("click", exportDraft);
els.restoreBtn.addEventListener("click", restorePlayers);
els.importBtn.addEventListener("click", importPlayers);
els.playerSearch.addEventListener("input", renderPlayers);

els.playerList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-draft]");
  if (button) draftPlayer(button.dataset.draft);
});

els.teamsPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-claim-team]");
  if (button && serverMode) {
    socket.emit("draft:claimTeam", Number(button.dataset.claimTeam));
  }
});

document.addEventListener("error", (event) => {
  if (event.target.matches(".headshot img")) {
    event.target.remove();
  }
}, true);

els.teamsPanel.addEventListener("input", (event) => {
  const input = event.target.closest("[data-team-name]");
  if (!input) return;
  if (serverMode) {
    socket.emit("draft:renameTeam", {
      teamIndex: Number(input.dataset.teamName),
      name: input.value,
    });
    return;
  }
  state.teamNames[Number(input.dataset.teamName)] = input.value || `Team ${Number(input.dataset.teamName) + 1}`;
  saveState();
  renderClock();
});

if (socket) {
  socket.on("draft:hello", ({ commissionerId }) => {
    state.commissionerId = commissionerId;
    serverMode = true;
    render();
  });

  socket.on("draft:state", (nextState) => {
    serverMode = true;
    Object.assign(state, normalizeState(nextState));
    saveState();
    render();
  });

  socket.on("connect_error", () => {
    serverMode = false;
    render();
  });
}

render();
