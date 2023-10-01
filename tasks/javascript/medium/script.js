
const timerElement = document.getElementById('timer');


let countdownTime = 10;


function startCountdown() {
  
  const interval = setInterval(() => {
    
    countdownTime--;

    
    timerElement.textContent = countdownTime;

  
    if (countdownTime === 0) {
    
      clearInterval(interval);

   
      timerElement.textContent = 'Time\'s up!';
    }
  }, 1000);
}


startCountdown();
