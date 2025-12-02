// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

let countdownValue = 10;
const timerDisplay = document.getElementById('timer');
const timeLeft = document.getElementById('time-left');

function startCountdown() {
  const interval = setInterval(() => {
    timerDisplay.textContent = countdownValue;
    
    if (countdownValue === 0) {
      clearInterval(interval);
      timeLeft.textContent = "Time's up!";
    } else {
      countdownValue--;
    }
  }, 1000);
}

startCountdown();
