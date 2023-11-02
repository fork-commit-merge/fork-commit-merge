// JavaScript - Medium

// Get the timer element
const timer = document.getElementById("timer");

// Set the initial countdown time
let countdownTime = 10;

// Start the countdown timer
function startCountdown() {
    // Decrement the countdown time
    countdownTime--;

    // Update the timer display
    timer.innerHTML = `00:0${countdownTime}`;

    // **Check if the countdown time has reached zero**
    if (countdownTime < 0) {
        // Display a message saying "Time's up!"
        timer.innerHTML = "Time's up!";

        // Stop the countdown timer
        clearInterval(interval);
    }
}

// Set the interval to update the timer every second
const interval = setInterval(startCountdown, 1000);