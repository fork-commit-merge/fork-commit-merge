// JavaScript - Medium
const timer = document.getElementById("timer");
let sec = 10;
function timeout() {
    timer.textContent = `00:${sec.toString().padStart(2, "0")}`;
    if (sec == 0) {
        timer.textContent = "Time's up!";
        return;
    }
    sec--;
    setTimeout(timeout, 1000);
}

timeout();