/**
 * screenTimeWarning.js
 * A small JavaScript utility to track how long a user spends on a webpage.
 * After a set time limit, it displays a friendly reminder to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(limitMinutes = 30) {
  const limitSeconds = limitMinutes * 60;
  let elapsedSeconds = 0;

  const timer = setInterval(() => {
    elapsedSeconds++;

    if (elapsedSeconds % 300 === 0 && elapsedSeconds < limitSeconds) {
      console.log(`⏱ You've been here for ${Math.floor(elapsedSeconds / 60)} minutes.`);
    }

    if (elapsedSeconds === limitSeconds) {
      alert(`⚠️ You've spent ${limitMinutes} minutes on this page. Time for a short break!`);
      clearInterval(timer);
    }
  }, 1000);

  console.log(`Screen time tracker started. You’ll be reminded after ${limitMinutes} minutes.`);
}

// Example usage
startScreenTimeWarning(10);
