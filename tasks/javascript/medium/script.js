// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero

function startCount(){
    let minutes = 0;
    let seconds = 10;
    const timerElement = document.getElementById('timer');

    const countdown = setInterval(function(){
        if(minutes === 0 && seconds === 0) {
            clearInterval(countdown);
            timerElement.textContent = "Time's Up";
        } else{
            const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
			timerElement.textContent = formattedTime;

            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
        }
    },1000);
}
window.onload = startCount;