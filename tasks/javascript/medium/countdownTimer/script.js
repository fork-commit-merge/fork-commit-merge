// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

const timerDisplay = document.getElementById("timer");
let timeRemaining = 10;

const countdown = setInterval(function () {
    timeRemaining--;

    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
    const seconds = String(timeRemaining % 60).padStart(2, "0");
    timerDisplay.textContent = minutes + ":" + seconds;

    if (timeRemaining <= 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "Time's up!";
    }
}, 1000);
