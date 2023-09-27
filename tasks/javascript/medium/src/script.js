document.addEventListener("DOMContentLoaded", function() {
    const timerDisplay = document.getElementById("timer-display");
    
    // Set the initial time (in seconds)
    let timeLeft = 10; // 10 minutes

    // Function to update the timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Function to decrement the timer and check for completion
    function decrementTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
        }
    }

    // Initial display
    updateTimerDisplay();

    // Start the countdown
    const timerInterval = setInterval(decrementTimer, 1000);
});
