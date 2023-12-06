// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

let currentTime = document.getElementById("timer").innerHTML;
let timeParts = currentTime.split(":");
let timeNum = parseFloat(timeParts[1]);

setInterval(() => {
  if (timeNum > 0) {
    timeNum = timeNum - 1;
  }
  document.getElementById("timer").innerHTML = "00 : " + timeNum;
}, 1000);
