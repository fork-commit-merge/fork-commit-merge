// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

let timerElement = document.getElementById('timer');

// If the timer element doesn't exist, create one and append it to the body.
if (!timerElement) {
  timerElement = document.createElement('div');
  timerElement.id = 'timer';
  document.body.appendChild(timerElement);
}

let timeLeft = 10;

const countdown = () => {
  if (timeLeft >= 0) {
    timerElement.textContent = timeLeft;
    timeLeft--;
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "Time's up!";
  }
};

// Set an interval to run the countdown function every second (1000 milliseconds).
const timerInterval = setInterval(countdown, 1000);
