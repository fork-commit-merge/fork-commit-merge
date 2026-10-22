// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
const time = document.querySelector(".time");
const timer = document.querySelector("#timer");

let count = 10;
let timerId = setInterval(() => {
  count -= 1;
  time.innerText = "0" + count;
  if (count == 0) {
    timer.innerText = "Time's Up!";
    clearInterval(timerId);
  }
}, 1000);
