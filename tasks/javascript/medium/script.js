// JavaScript - Medium

document.addEventListener("DOMContentLoaded", () => {
    let timeLeft = 10;
    const timerEl = document.getElementById("timer");

    const updateDisplay = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const tick = () => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerId);
            timerEl.textContent = "Time's up!";
        }
    };

    updateDisplay();
    const timerId = setInterval(tick, 1000);
});

