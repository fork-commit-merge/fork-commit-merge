const timer = document.getElementById('timer');
let timeLeft = 10;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft === 0) {
        timer.textContent = "Time's up!";
        clearInterval(interval); // Stop the timer when it reaches zero
    } else {
        timeLeft--;
    }
}

updateTimer(); // Display initial time
const interval = setInterval(updateTimer, 1000);
