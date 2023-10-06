// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero

function startCountdownTimer() {
	let seconds = 10; // Set the initial countdown time

	let timerElement = document.getElementById("timer");
  
	const countdownInterval = setInterval(function () {
	  seconds--; // Decrement the countdown value
 
	 // If the countdown is still running, update the display
	 if (seconds >= 0) {
		// Update the HTML element with the countdown value
		timerElement.innerText = `00:0${seconds}`
	  } else {
		 // If the countdown reaches zero, display "Time's up!" and stop the timer
		 clearInterval(countdownInterval);
		// Update the HTML element with the countdown value
		timerElement.innerText = "Time's up!";
	  }
	}, 1000); // Update every 1000 milliseconds (1 second)
 }
 
 // Call the function to start the countdown timer when the page loads
 window.onload = function () {
	startCountdownTimer();
 };
