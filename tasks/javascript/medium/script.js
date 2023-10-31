window.onload = function() {
    const timerElement = document.getElementById('timer');
    
    let seconds = 10;
    let minutes = 0;
    
    function updateTimer() {
        timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    function countdown() {
        if (seconds === 0 && minutes === 0) {
            clearInterval(intervalId); 
            timerElement.textContent = 'Countdown is over!';
        } else if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateTimer();
    }

    updateTimer();
    
    const intervalId = setInterval(countdown, 1000);
};
