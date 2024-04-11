// JavaScript - Medium
var timeLeft = 10;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearInterval(timerId);
    elem.innerHTML = "Time's Up!";
  } else {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    elem.innerHTML = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    timeLeft--;
  }
}

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
