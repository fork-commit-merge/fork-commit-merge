// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
let seconds = 9
const timer = document.getElementById("timer");

const id = setInterval(() => {
    timer.textContent = `00:${String(seconds).padStart(2, "0")}`
    seconds -= 1
    if (seconds=== -1){
        clearInterval(id)
        timer.textContent = "Time's up!"
    }
}, 1000);
