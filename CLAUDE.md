# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Basketball scoreboard for OBS (Open Broadcaster Software) streaming. No build process — pure HTML/CSS/JavaScript with no external dependencies.

## Running

```bash
./start.sh
# or
python3 -m http.server 8000 --bind 0.0.0.0
```

Access at `http://localhost:8000/`. No tests exist — verification is visual in browser or OBS.

## Deployment

Commit and push to `main`. GitHub Pages rebuilds automatically.

## Architecture

Three-file application:

- **[index.html](index.html)** — scoreboard bar (top) + control panel grid (bottom). All interactive elements use `contenteditable` or standard inputs.
- **[style.css](style.css)** — all styling; 5 responsive breakpoints (1200px, 900px, 700px, 500px). Transparent background (`background: transparent`) is required for OBS chroma key.
- **[script.js](script.js)** — timer logic, score management, input validation, and `parameters.txt` loading.

## Configuration System

Team setup is controlled by [parameters.txt](parameters.txt):

```env
SHOW_LOGO=yes       # 'yes' | 'no' — toggles logo visibility entirely
HOME_TEAM=gnu       # filename stem under img/ (e.g. gnu → img/gnu.png)
AWAY_TEAM=bira
```

`loadTeamConfig()` in [script.js](script.js) fetches this file on page load and applies values. Logos live in [img/](img/): `apacobas.jpeg`, `asiba.png`, `bira.png`, `comercial.png`, `dunk.png`, `gnu.png`, `recreio.png`, `sgnh.png`, `unico.png`.

When adding a new team, place the logo in `img/` and update `parameters.txt`.

## Key Defaults to Know

| Detail | Location | Value |
|---|---|---|
| Timer default | [script.js:2](script.js) + [index.html:24](index.html) | 600s / "10:00" |
| Scoreboard height | [style.css:28](style.css) | 100px |
| Logo size | [style.css:41-42](style.css) | 70×70px |
| Score font | [style.css:78](style.css) | 72px |
