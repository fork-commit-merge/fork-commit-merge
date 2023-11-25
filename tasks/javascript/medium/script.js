var timerElement = document.getElementById("timer");


var countdownTime = 10;

function updateTimerDisplay() {
    var minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
function countdown() {
    updateTimerDisplay();
    if (countdownTime === 0) {
        timerElement.textContent = "Time's up!";
    } else {
        countdownTime--;
        setTimeout(countdown, 1000);
    }
}
countdown();
