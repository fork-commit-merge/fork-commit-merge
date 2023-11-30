// Get the timer element by its ID
const timerElement = document.getElementById('timer');

// Set the initial countdown time in seconds
let countdownTime = 10;

// Function to update the timer display
function updateTimerDisplay() {
  // Format the countdown time as MM:SS
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Update the timer element's content
  timerElement.textContent = formattedTime;
}

// Function to start the countdown
function startCountdown() {
  // Update the timer display initially
  updateTimerDisplay();

  // Interval function to countdown every second
  const countdownInterval = setInterval(() => {
    // Decrease the countdown time by 1 second
    countdownTime--;

    // Update the timer display
    updateTimerDisplay();

    // Check if the countdown has reached zero
    if (countdownTime === 0) {
      // Display "Time's up!" message
      timerElement.textContent = "Time's up!";
      
      // Clear the interval to stop the countdown
      clearInterval(countdownInterval);
    }
  }, 1000);
}

// Start the countdown when the page loads
startCountdown();
