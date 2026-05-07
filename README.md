# NBA Snake Draft Room

A realtime NBA fantasy snake draft room for up to 6 teams.

## What changed

- `server.js` is the shared draft server.
- `Socket.IO` keeps every browser in sync.
- The server enforces draft rules:
  - only the team currently on the clock can draft
  - each browser can claim one team
  - only the team owner can rename/edit that team
  - only the commissioner can start a new draft, undo picks, restore players, or import players

## Run locally

Install Node.js, then from this folder:

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
```

For friends outside your computer, deploy this folder to a Node host that supports WebSockets. Use:

```bash
npm install
npm start
```

The host should expose port `3000` or set a `PORT` environment variable.

## Draft flow

1. The first person to open the room becomes commissioner.
2. Everyone opens the same room URL.
3. Each person clicks `Claim` on their team.
4. Draft buttons only unlock for the team currently on the clock.
