# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a basketball scoreboard application designed for OBS (Open Broadcaster Software) streaming. It displays:

- Home and away team scores (editable)
- Team names (editable)
- Team logos/images
- A countdown timer with custom time input
- Period/quarter display (editable, e.g., "1st", "2nd")
- Score control buttons

## How to Run

Start the local web server:

```bash
./start.sh
```

Or manually:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then access the scoreboard at `http://localhost:8000/` or use it as a browser source in OBS.

## Architecture

### File Structure

The application is split into three files:

- **[index.html](index.html)**: HTML structure with scoreboard display and control panel
- **[style.css](style.css)**: All styling including responsive design breakpoints
- **[script.js](script.js)**: Score management, timer functionality, and input validation

### Key Components

**Scoreboard Display** (at top of page)

- Two team sections (left/right) each containing:
  - Team logo (70px x 70px, with image fallback handling)
  - Team name (contenteditable, default: "GNU" and "BIRA")
- Center score display:
  - Two scores separated by "x"
  - Both scores are contenteditable with validation
- Game info box (right side):
  - Timer display in MM:SS format
  - Period display (contenteditable, default: "1st")

**Control Panel** (at bottom of page)

- 5-column grid layout:
  - Columns 1-2: Home team score controls (+1/+2/+3 and -1/-2/-3)
  - Column 3: Timer controls (START/STOP, time input field, RESET)
  - Columns 4-5: Away team score controls (+1/+2/+3 and -1/-2/-3)

### Timer System ([script.js](script.js))

- Countdown timer with default 10:00 minutes (600 seconds)
- Custom time input in MM:SS format
- START/STOP button toggles between states (changes color when active)
- Timer input is disabled while timer is running
- Clicking the timer display also resets it when stopped
- Auto-stops when reaching 0:00

### Score Validation ([script.js](script.js))

- Score elements validate on blur events
- Only numeric characters allowed
- Empty values default to 0
- Enter key triggers blur (prevents line breaks)

### Team Configuration System

The application uses a [.teams](.teams) configuration file to dynamically load team logos and names:

**Configuration File Format:**

```env
SHOW_LOGO=yes
HOME_TEAM=gnu
AWAY_TEAM=bira
```

**Configuration Variables:**

- `SHOW_LOGO` - Controls logo visibility:
  - `yes` - Shows team logos and loads images from `./img/` directory
  - `no` - Hides both logo containers completely (ignores HOME_TEAM and AWAY_TEAM)
- `HOME_TEAM` - Name of the home team (used for logo filename and display name)
- `AWAY_TEAM` - Name of the away team (used for logo filename and display name)

**How It Works:**

- On page load, [script.js](script.js:6-68) fetches and parses the `.teams` file
- If `SHOW_LOGO=yes`:
  - Team logos are loaded from `./img/{team_name}.png` (e.g., `./img/gnu.png`)
  - Team names are displayed in uppercase (e.g., "gnu" becomes "GNU")
- If `SHOW_LOGO=no`:
  - Both logo containers are hidden with `display: none`
  - HOME_TEAM and AWAY_TEAM parameters are ignored
- Supports comments (lines starting with `#`) and ignores empty lines
- Falls back to default values if the file cannot be loaded

**Available Team Logos:**

Located in the [img/](img/) directory:

- apacobas.jpeg, asiba.png, bira.png, comercial.png, dunk.png, gnu.png, recreio.png, sgnh.png, unico.png

**To Change Teams:**

1. Edit the [.teams](.teams) file with the desired team names
2. Ensure corresponding logo files exist in the `img/` directory
3. Refresh the browser to apply changes

**Important Notes:**

- The `.teams` file is listed in [.gitignore](.gitignore) to prevent accidentally committing team configurations
- This allows each environment/broadcast to have its own team setup without affecting the repository
- Images have `onerror` handlers to hide if loading fails

## Modifying the Scoreboard

**Changing Teams (Recommended Method):**
Edit the [.teams](.teams) file with the desired team names, then refresh the browser. The logos and names will update automatically.

**Manual Override (During Broadcast):**
Team names are contenteditable and can be modified directly in the browser without changing files

**Adjusting Display Sizes:**

- Scoreboard bar height: [style.css](style.css:28) (100px)
- Team logo size: [style.css](style.css:41-42) (70px x 70px)
- Team name font: [style.css](style.css:61) (42px)
- Score font: [style.css](style.css:78) (72px)
- Timer font: [style.css](style.css:106) (36px)
- Period font: [style.css](style.css:115) (24px)
- Control buttons: [style.css](style.css:134-136) (32px font, 100px height)

**Modifying Timer Default:**
Change the initial value in [script.js](script.js:2) (600 seconds = 10 minutes) and [index.html](index.html:24) (input field default "10:00")

**Responsive Design:**
[style.css](style.css) includes 5 responsive breakpoints at 1200px, 900px, 700px, 500px that scale all elements proportionally

## Technical Notes

- No build process required - pure HTML/CSS/JavaScript
- No external dependencies or frameworks
- Transparent background (`background: transparent`) for OBS chroma key
- Grid-based control layout for consistent button positioning
- Scores and team names are contenteditable for quick manual adjustments
- Timer uses `setInterval` with 1-second updates

## Git Configuration

The [.gitignore](.gitignore) file excludes:

- `.teams` - Team configuration file (allows per-environment customization without committing)

This ensures that team configurations remain local to each broadcast environment and don't conflict when pulling updates from the repository.
