const timer = document.getElementById("timer");

let timeLeft = 10;

timer.textContent = timeLeft;

const countdown = setInterval(() => {

    timeLeft--;

    timer.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(countdown);
        timer.textContent = "Time's up!";
    }

}, 1000);