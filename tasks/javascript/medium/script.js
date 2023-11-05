// Get the timer element
const timerElement = document.getElementById('timer');

// Set the initial countdown time in seconds
let countdown = 10;

// Function to update the countdown timer
function updateTimer() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    
    // Display the countdown time in the format MM:SS
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    countdown--;

    // Check if the countdown has reached 0
    if (countdown < 0) {
        clearInterval(timerInterval); // Stop the timer
        timerElement.textContent = "Time's up!";
    }
}

// Call the updateTimer function every second
const timerInterval = setInterval(updateTimer, 1000);
