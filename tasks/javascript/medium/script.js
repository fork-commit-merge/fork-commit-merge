
const timerDisplay = document.getElementById('timer');

let countdownTime = 10;

function updateTimerDisplay() {
  if (countdownTime >= 0) {
    timerDisplay.textContent = countdownTime;
    countdownTime--;
  } else {
    timerDisplay.textContent = "Time's up!";
    clearInterval(timerInterval);
  }
}

updateTimerDisplay();

const timerInterval = setInterval(updateTimerDisplay, 1000);
