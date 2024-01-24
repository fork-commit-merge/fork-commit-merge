// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

const timer = document.querySelector('#timer');
let count = 10;

const interval = setInterval(() => {
  if (count === 0) {
    clearInterval(interval);
    timer.innerHTML = '<h1>Done</h1>';
  } else {
    timer.innerHTML = count;
    count--;
  }
}, 1000);
