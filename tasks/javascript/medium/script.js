// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
const timerDisplay = document.getElementById('timer');
let countdownTime = 10;

function updateTimer() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    updateTimer();
    const timerInterval = setInterval(() => {
        if (countdownTime === 0) {
            clearInterval(timerInterval); 
            timerDisplay.textContent = "Time's up!"; 
        } else {
            countdownTime--; 
            updateTimer();
        }
    }, 1000); 
}

window.onload = startTimer;
