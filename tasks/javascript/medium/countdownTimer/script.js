// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

const START_TIME = 10;

const startTime = (updateFunc, START_TIME) => {
    let time = START_TIME;
    updateFunc(START_TIME);

    const interval = setInterval(() => {
        updateFunc(Math.max(--time, 0));
        if (time == 0) clearInterval(interval)
    }, 1000)
}

const formatTime = seconds => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}


const contaier = document.getElementById("timer");
const updateContainerWithTime = seconds => {
    contaier.innerHTML = formatTime(seconds);
}


startTime(updateContainerWithTime, START_TIME);