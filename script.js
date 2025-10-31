let timerInterval = null;
let timeRemaining = 600; // 10 minutes in seconds
let isRunning = false;

// Load team configuration from parameters.txt file
async function loadTeamConfig() {
  try {
    const response = await fetch('parameters.txt');
    const text = await response.text();

    // Parse .env-style format
    const config = {};
    text.split('\n').forEach(line => {
      line = line.trim();
      if (line && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value) {
          config[key.trim()] = value.trim();
        }
      }
    });

    // Check if logos should be shown
    const showLogos = config.SHOW_LOGO !== 'no';

    const homeLogoDiv = document.querySelector('#homePicture');
    const awayLogoDiv = document.querySelector('#awayPicture');

    if (!showLogos) {
      // Hide both logo containers
      if (homeLogoDiv) homeLogoDiv.style.display = 'none';
      if (awayLogoDiv) awayLogoDiv.style.display = 'none';
    } else {
      // Show logos and set team images/names
      if (homeLogoDiv) homeLogoDiv.style.display = 'flex';
      if (awayLogoDiv) awayLogoDiv.style.display = 'flex';

      // Set home team
      if (config.HOME_TEAM) {
        const homeTeam = config.HOME_TEAM;
        const homeImg = document.querySelector('#homePicture img');
        const homeName = document.querySelector('.team-left .team-name');

        if (homeImg && homeName) {
          homeImg.style.display = 'block';
          homeImg.src = `./img/${homeTeam}.png`;
          homeName.textContent = homeTeam.toUpperCase();
        }
      }

      // Set away team
      if (config.AWAY_TEAM) {
        const awayTeam = config.AWAY_TEAM;
        const awayImg = document.querySelector('#awayPicture img');
        const awayName = document.querySelector('.team-right .team-name');

        if (awayImg && awayName) {
          awayImg.style.display = 'block';
          awayImg.src = `./img/${awayTeam}.png`;
          awayName.textContent = awayTeam.toUpperCase();
        }
      }
    }
  } catch (error) {
    console.error('Error loading team config:', error);
    // Fallback to default values if .teams file is not found
  }
}

// Load team config when page loads
loadTeamConfig();

function changeScore(team, delta) {
  const el = document.getElementById('score' + team);
  let score = parseInt(el.textContent);
  score = Math.max(0, score + delta);
  el.textContent = score;
}

function resetScores() {
  document.getElementById('score1').textContent = 0;
  document.getElementById('score2').textContent = 0;

  // Reset timer to input value
  if (isRunning) {
    stopTimer();
  }
  const input = document.getElementById('timerInput');
  timeRemaining = parseTime(input.value);
  updateTimerDisplay();
  timerInterval = null;
}

function parseTime(timeStr) {
  const parts = timeStr.split(':');
  if (parts.length !== 2) return 600;
  const minutes = parseInt(parts[0]) || 0;
  const seconds = parseInt(parts[1]) || 0;
  return minutes * 60 + seconds;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
  document.getElementById('timerDisplay').textContent = formatTime(timeRemaining);
}

function toggleTimer() {
  const button = document.getElementById('timerButton');
  const input = document.getElementById('timerInput');

  if (!isRunning) {
    // Start the timer
    if (timerInterval === null) {
      // First time or after reset - parse the input
      timeRemaining = parseTime(input.value);
      updateTimerDisplay();
    }

    isRunning = true;
    button.classList.add('stop');
    input.disabled = true;

    timerInterval = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateTimerDisplay();
      } else {
        // Timer reached 0
        stopTimer();
      }
    }, 1000);
  } else {
    // Stop the timer
    stopTimer();
  }
}

function stopTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  const button = document.getElementById('timerButton');
  const input = document.getElementById('timerInput');
  button.classList.remove('stop');
  input.disabled = false;
}

// Update display when input changes
document.getElementById('timerInput').addEventListener('input', function(e) {
  if (!isRunning) {
    timeRemaining = parseTime(e.target.value);
    updateTimerDisplay();
    timerInterval = null;
  }
});

// Reset timer when clicking on the timer display
document.getElementById('timerDisplay').addEventListener('click', function() {
  if (!isRunning) {
    const input = document.getElementById('timerInput');
    timeRemaining = parseTime(input.value);
    updateTimerDisplay();
    timerInterval = null;
  }
});

// Validate and sanitize score inputs
function validateScore(scoreElement) {
  let value = scoreElement.textContent.trim();
  // Remove non-numeric characters
  value = value.replace(/[^0-9]/g, '');
  // If empty, set to 0
  if (value === '') {
    value = '0';
  }
  // Update the element with cleaned value
  scoreElement.textContent = value;
}

// Add event listeners to score elements for validation
document.getElementById('score1').addEventListener('blur', function() {
  validateScore(this);
});

document.getElementById('score2').addEventListener('blur', function() {
  validateScore(this);
});

// Prevent line breaks when pressing Enter in score fields
document.getElementById('score1').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    this.blur();
  }
});

document.getElementById('score2').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    this.blur();
  }
});

// Placeholder for future change detection
// Currently no auto-refresh implemented
