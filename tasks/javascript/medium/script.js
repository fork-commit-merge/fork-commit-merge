// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero

document.addEventListener("DOMContentLoaded", function () {
    const timer = document.getElementById("timer");

    function updateTimer() {
        const seconds = timer.textContent.slice(-2);
        if (seconds > 0) {
            timer.textContent = `00:${(seconds - 1).toString().padStart(2, "0")}`;
        } else {
            clearInterval(countdownInterval);
            timer.textContent = "Time's up!";
        }
    }

    let countdownInterval = setInterval(updateTimer, 1000);
    sleep(1000).then(() => updateTimer());
});
