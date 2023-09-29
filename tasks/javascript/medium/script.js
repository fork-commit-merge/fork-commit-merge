// Get the timer element
const timerElement = document.getElementById('timer');

// Set the time for the countdown (in seconds)
let timeInSeconds = 10;

// Update the timer every second
const timerInterval = setInterval(() => {
    // Check if the time has run out
    if (timeInSeconds <= 0) {
        clearInterval(timerInterval);  // Stop the timer
        timerElement.innerHTML = 'Time`s Up !';  // Display 
    } else {
        // Format the time to display in Task format
        const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');

        // Update the timer element
        timerElement.innerHTML = `${minutes}:${seconds}`;

        
        timeInSeconds--;
    }
}, 1000);  // Update every 1 second (1000 milliseconds)
