// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

let timeLeft = 10;

const timerDisplay = document.getElementById('timer');

const countdown = setInterval(() => {
  if (timerDisplay) {
    timerDisplay.textContent = timeLeft;
  }

  if (timeLeft <= 0) {
    clearInterval(countdown);
    if (timerDisplay) {
      timerDisplay.textContent = "Time's up!";
    }
    return;
  }

  timeLeft--;
}, 1000);
