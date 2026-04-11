// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

let timer = document.getElementById("timer");

let counter = 10;

const interval = setInterval(() => {
    timer.innerHTML = "00:" + String(counter).padStart(2, '0');

    if (counter === 0) {
        clearInterval(interval);
        setTimeout(() => {
            timer.innerHTML = "Time's up!";
        }, 1000);
        return;
    }

    counter--;

}, 1000);