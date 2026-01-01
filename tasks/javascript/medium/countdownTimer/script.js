// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
const timer = document.getElementById("timer");
let seconds = 10;

setInterval(() => {
  timer.textContent =
    seconds > 0 ? `00:${String(seconds--).padStart(2, "0")}` : "Time's up!";
}, 1000);
