// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero
document.addEventListener("DOMContentLoaded", function() {
    const timer = document.getElementById("timer");
    let timeLeft = 10;
  
    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        timer.textContent = "00:00";
      } else {
        timeLeft--;
      }
    }
  
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
  });  