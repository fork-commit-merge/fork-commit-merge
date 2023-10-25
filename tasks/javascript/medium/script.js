// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero
const timer = document.getElementById('timer');
let timeLeft = 10;
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeLeft === 0) {
        timer.textContent = "Time's up!";
        clearInterval(interval);
    } else {
        timeLeft--;
    }
}
const interval = setInterval(updateTimer, 1000);
