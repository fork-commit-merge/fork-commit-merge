// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

function handleCountDown() {
  let time = 10;
  let timerEl = document.getElementById("timer");
  
  function updateTimeAndDOM() {
    time -= 1;
    timerEl.innerText = "00:0" + time;

    if (time === 0) {
      timerEl.innerText = "Times up!";
      clearInterval(countdownInterval);
    }
  }

  const countdownInterval = setInterval(updateTimeAndDOM, 1000);
}

document.addEventListener("DOMContentLoaded", handleCountDown());