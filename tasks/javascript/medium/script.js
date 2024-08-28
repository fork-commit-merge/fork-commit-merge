// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

let timerNode = document.getElementById('timer');
let countDown = 10;

//sets the current 'time'
function setTimer() {
    if (countDown > 0) {
        countDown -= 1;
    }
    return countDown;
}

//every 1 sec we call the setTimer function to set a new time, updating the current
setInterval(function () {
    const time = setTimer();
    timerNode.innerHTML = `00:${time < 10 ? '0' : ''}${time}`;
}, 1000);