// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
const timer = document.getElementById("timer");

function countdownTimer() {
    let timeLeft = 10;

    const interval = setInterval(() => {
        timeLeft--;

        if (timeLeft >= 0) {
            timer.textContent = `00:${String(timeLeft).padStart(2, "0")}`;
        } else {
            clearInterval(interval);
            timer.textContent = "Time's up!";
        }
    }, 1000);
}

countdownTimer();