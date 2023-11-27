// JavaScript - Medium
// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
// Set the countdown time in seconds

function updateCountdownDisplay(seconds) {
    const countdownElement = document.getElementById('timer');
    countdownElement.innerHTML = seconds;
}

function countdown() {
    let i = 10;

    const countdownInterval = setInterval(function () {
        updateCountdownDisplay(i);

        if (i <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').textContent = "Time's up!";
        }

        i--;
    }, 1000);
}

window.onload = countdown;
