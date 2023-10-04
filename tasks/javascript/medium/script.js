// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero
const timerElement = document.getElementById('timer');

let countdown = 10;
function updateTimer() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function countdownTick() {
    updateTimer();

    if (countdown === 0) {
        timerElement.textContent = "Time's up!";
        clearInterval(timerInterval);
    } else {
        countdown--;
    }
}

const timerInterval = setInterval(countdownTick, 1000);