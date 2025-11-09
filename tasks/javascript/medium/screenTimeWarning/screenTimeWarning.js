/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 * Note: When running this script directly with Node.js, the program may exit before the timer
 * completes if the duration is long, as there is nothing else keeping the event loop alive.
 * For demonstration, a short duration is used in the example below.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

/**
 * Sets a timer and displays a warning message after a specified duration.
 * @param {number} [limitMinutes=30] - The time limit in minutes before the warning is shown.
 */
function startScreenTimeWarning(limitMinutes = 30) {
  // Calculate the time limit in milliseconds from the provided minutes.
  const timeLimitInMilliseconds = limitMinutes * 60 * 1000;

  // Inform the user that the screen time warning timer has started
  // and when the warning is expected, which helps in verification.
  console.log(`Screen time warning timer started.`);
  console.log(`You will be reminded to take a break after ${limitMinutes} minute(s).`);

  // Set a timeout to display the friendly reminder message after the calculated duration.
  setTimeout(() => {
    console.log('Time to take a break!');
  }, timeLimitInMilliseconds);
}

// Example usage: Start the screen time warning timer for 0.1 minutes (6 seconds).
// This short duration ensures the warning is visible when running the script with Node.js.
// This call will execute automatically when the file is run,
// initiating the countdown for the warning message.
startScreenTimeWarning(0.1);