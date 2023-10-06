// Create functionality for a countdown timer that counts down from 10 seconds to zero then display a message "Time's up!"

// Logic:
// Set a variable for the seconds
// Repeat code every 1s using setInterval method
// Decrement the seconds
// When seconds is zero clear time and display "Time's up!";
// If seconds not zero then display the remaining seconds

const counterDown = () => {
  let s = 10;
  setInterval(function () {
    if (s === 0) {
      clearInterval(timer);
      document.getElementById("timer").textContent = "Time's up!";
    } else {
      const formattedTime = `00:${s.toString().padStart(2, "0")}`;
      document.getElementById("timer").textContent = formattedTime;
      s--;
    }
  }, 1000);
};

window.onload = counterDown;
