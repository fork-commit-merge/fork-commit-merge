// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
function countdownTimer() {
  const timer = document.getElementById('timer');
  let time = 10;
  const interval = setInterval(() => {
    timer.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(interval);
      console.log('Time is up!');
    }
  }, 1000);
  return interval;
}

countdownTimer();