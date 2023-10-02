// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero

const timer = document.getElementById("timer");
let time = 10;

setInterval(() => {
  timer.innerHTML = (time < 0) ? "Time's up!" : `OO:${time}`;
  time--;
}, 1000);
