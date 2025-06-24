// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

function startCountdown() {
    let timeLeft = 10;
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;
    const countdownInterval = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Time's up!";
        }
    }, 1000);
}