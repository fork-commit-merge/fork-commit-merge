// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero
let time = 10;

const updateTimer = () => {
    const timer = document.getElementById("timer");
    timer.textContent = `00:${time}`;
    time--;

    if (time < 0) {
        clearInterval(interval);
        timer.textContent = `Time's up!`;
    }
};

const interval = setInterval(updateTimer, 1000);
