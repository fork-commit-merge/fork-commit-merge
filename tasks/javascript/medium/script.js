// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero

var timer = document.getElementById("timer");
var time = 10;
setInterval(() => {
  time--;
  if (time > 0) timer.innerHTML = "00:" + time;
  else timer.innerHTML = "Time's up!";
}, 1000);