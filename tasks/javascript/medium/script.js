document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer');
    
    let countdown; 
    let seconds = 10;

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        timerDisplay.textContent = formatTime(seconds);
    }

    function startCountdown() {
        updateTimerDisplay();

        countdown = setInterval(function () {
            seconds--;

            if (seconds < 0) {
                clearInterval(countdown);
                seconds = 0;
            }

            updateTimerDisplay();
        }, 1000);
    }

    startCountdown(); 
});
