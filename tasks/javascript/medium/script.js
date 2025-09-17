// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft < 0){
    clearInterval(downloadTimer);
  } else {
    document.getElementById("timer").textContent = 10 - timeleft;
    timeleft -= 1;
  }
}, 1000);
