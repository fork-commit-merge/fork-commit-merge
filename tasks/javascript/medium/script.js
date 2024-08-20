// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
var seconds = 9;
var intervalId;

function tick() {
    var counter = document.getElementById("timer");
    var currentTime = seconds--;

    counter.innerHTML = currentTime < 10 ? "00:0" + currentTime : currentTime;

    if(currentTime < 0) {
        counter.innerHTML = "Time's up!";
        clearInterval(intervalId);
    }
}

intervalId = setInterval(tick, 1000);