// JavaScript - Medium
// Get references to the timer and message elements
const timerDisplay = document.getElementById('timer');
const messageDisplay = document.createElement('div');
messageDisplay.id = 'message';
document.body.appendChild(messageDisplay);

// Initialize the countdown to 10 seconds
let countdown = 10;

// Function to update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
}

// Function to handle the countdown
function countdownTimer() {
    // Update the timer display
    updateTimerDisplay();

    // Check if the countdown has reached zero
    if (countdown === 0) {
        clearInterval(interval); // Stop the countdown
        timerDisplay.style.display = 'none'; // Hide the timer
        messageDisplay.textContent = "Time's up!"; // Display the message
    } else {
        countdown--; // Decrement the countdown
    }
}

// Call the countdownTimer function every second
const interval = setInterval(countdownTimer, 1000);

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero
