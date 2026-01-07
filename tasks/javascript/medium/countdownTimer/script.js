// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
// Select the timer element from the DOM
const timerElement = document.getElementById('timer');

// Initialize the countdown time in seconds
let timeLeft = 10;

// Create an interval that runs every 1000ms (1 second)
const timerInterval = setInterval(() => {
    // Decrement the time left
    timeLeft--;

    // Check if the timer has reached zero
    if (timeLeft === 0) {
        // Display the message and clear the interval
        timerElement.textContent = "Time's up!";
        clearInterval(timerInterval);
    } else {
        // Update the display with the remaining seconds
        // Using '00:0' + timeLeft since we are counting down from 10 (9, 8, etc.)
        timerElement.textContent = `00:0${timeLeft}`;
    }
}, 1000);