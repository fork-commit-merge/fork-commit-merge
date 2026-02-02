// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
const time =document.getElementById('timer');
let seconds = 10;
const countdown = setInterval(() => {
    time.textContent = seconds;
    seconds--;
    if (seconds < 0) {
        clearInterval(countdown);
        time.textContent = "Time's up!";
    }
}, 1000);