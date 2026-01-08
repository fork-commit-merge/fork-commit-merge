/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(limitMinutes = 30) {
  if (typeof limitMinutes !== "number" || limitMinutes <= 0) {
    console.log("Please provide a valid time limit in minutes.");
    return;
  }

  const limitMilliseconds = limitMinutes * 60 * 1000;

  console.log(
    `Screen time tracking started. You will be reminded after ${limitMinutes} minute(s).`
  );

  setTimeout(() => {
    console.log(
      "⏰ You've been on this page for a while. Consider taking a short break 😊"
    );
  }, limitMilliseconds);
}

// Example usage
startScreenTimeWarning(10);
