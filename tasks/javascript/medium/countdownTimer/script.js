// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer")
    var time = 10

    const clock = setInterval(() => {
        time -= 1
        timerElement.setHTML(`00:0${time}`)
        console.log(`The time is: 00:0${time}`);

        if(time == 0) {
            clearInterval(clock)
            alert("Time's up!")
        }
    }, 1000);
});