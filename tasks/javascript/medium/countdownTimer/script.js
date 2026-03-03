// JavaScript - Medium

// Countdown timer that counts down from 10 seconds to zero

const timerDisplay = document.getElementById("timer");
let timeLeft = 10;

const countdown = setInterval(() => {
  timeLeft--;

  if (timeLeft > 0) {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    timerDisplay.textContent = `${minutes}:${seconds}`;
  } else {
    timerDisplay.textContent = "Time's up!";
    clearInterval(countdown);
  }
}, 1000);
