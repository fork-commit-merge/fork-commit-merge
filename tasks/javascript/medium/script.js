// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Set the initial time in seconds
    let timeInSeconds = 10;

    // Get the timer element
    const timerElement = document.getElementById('timer');

    // Function to update the timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Function to handle each second of the countdown
    function countdown() {
        if (timeInSeconds > 0) {
            timeInSeconds--;
            updateTimerDisplay();
        } else {
            // Timer has reached zero, display "Time's up!" message
            timerElement.textContent = "Time's up!";
            clearInterval(timerInterval);
        }
    }

    // Initial display
    updateTimerDisplay();

    // Set up the interval to update the countdown every second
    const timerInterval = setInterval(countdown, 1000);
});
