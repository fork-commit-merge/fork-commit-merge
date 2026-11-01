// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
const timer = document.getElementById('timer');
let remainingSeconds = 10;
timer.textContent = `00:${String(remainingSeconds).padStart(2, '0')}`;

const countdown = setInterval(() => {
  remainingSeconds -= 1;

  if (remainingSeconds === 0) {
    timer.textContent = "Time's up!";
    clearInterval(countdown);
    return;
  }

  timer.textContent = `00:${String(remainingSeconds).padStart(2, '0')}`;
}, 1000);
