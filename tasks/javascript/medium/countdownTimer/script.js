// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
let timeLeft = 10;

const timerDisplay = document.getElementById("timer");

const countdown = setInterval(() => {
  if (timeLeft > 0) {
    timerDisplay.textContent = timeLeft;
    timeLeft--;
  } else {
    clearInterval(countdown);
    timerDisplay.textContent = "Time's up!";
  }
}, 1000);
