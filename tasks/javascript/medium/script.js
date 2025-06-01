// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 10; // Starting from 10 seconds

    // Function to update the timer display
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Time's up!";
        } else {
            timeLeft--;
        }
    }

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);
});