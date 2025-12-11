// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

let timer = document.getElementById("timer");

timerValue = 10;

const countdown = setInterval(() => {
  timer.innerText = timerValue;
  timerValue--;

  if (timerValue < 0) {
    clearInterval(countdown);
    timer.innerText = "Time's up!";
  }
}, 1000);
