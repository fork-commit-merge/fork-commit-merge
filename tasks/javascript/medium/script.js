// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

var timeLeft = 9

const timer = setInterval(() => {
    if (timeLeft < 0){
        clearInterval(timer);
        document.getElementById('timer').innerHTML = "Time's up!"
    } else {
        document.getElementById('timer').innerHTML = `00:0${timeLeft}`
    }
    timeLeft -= 1
}, 1000)