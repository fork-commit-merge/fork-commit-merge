// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

let countdown = 10;
const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('timer');

const timerId = setInterval(() => {
    let formattedCountdown = `00:${String(countdown).padStart(2, '0')}`;
    timerElement.textContent = formattedCountdown;

    if (countdown <= 0) {
        clearInterval(timerId);
        timerElement.textContent = '';
        messageElement.textContent = "Time's up!";
    } else {
        countdown--;
    }
}, 1000);