/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(limitMinutes = 30) {
  const limitMs = limitMinutes * 60 * 1000
  const startTime = Date.now()

  const intervalId = setInterval(() => {
    const elapsed = Date.now() - startTime
    if (elapsed >= limitMs) {
      console.log(`You've been on this page for ${limitMinutes} minute(s). Time to take a break!`)
      clearInterval(intervalId)
    }
  }, 1000)
}

// Example usage
startScreenTimeWarning(10);
