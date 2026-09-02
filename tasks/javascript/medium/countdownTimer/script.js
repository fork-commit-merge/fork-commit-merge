// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

const timer = document.getElementById("timer");

let seconds = 10;

const countdown = setInterval(() => {
    seconds--;

    if (seconds === 0) {
        timer.textContent = "Time's up!";
        clearInterval(countdown);
        return;
    }

    timer.textContent = `00:${String(seconds).padStart(2, "0")}`;
}, 1000);
