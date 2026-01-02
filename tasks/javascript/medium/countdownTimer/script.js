// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
function startCountdown() {
    let countdownElement = document.getElementById('timer');
    let timeLeft = 10;

    let interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            countdownElement.textContent = `00:${timeLeft > 9 ? timeLeft : '0' + timeLeft}`;
        } else {
            clearInterval(interval);
            countdownElement.textContent = "Time's up!";
        }
    }, 1000);
}

// Start the countdown when the window loads
window.onload = startCountdown;