// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

    let time = 10;

const timerEl = document.getElementById("timer");

const interval=setInterval(()=>{
    time=time-1
    timerEl.textContent=time
    if(time===0){
        clearInterval(interval)
    }

},1000)


