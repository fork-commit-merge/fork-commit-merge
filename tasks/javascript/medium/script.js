// JavaScript - Medium
let time = 9;
const interval = setInterval(() => {
    console.log(time);
    const timer = document.getElementById('timer');
    
    timer.innerHTML = "00:0" + time;
    time-=1;
    if(time < 0){
        clearInterval(interval);
    }
}, 1000);

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero
