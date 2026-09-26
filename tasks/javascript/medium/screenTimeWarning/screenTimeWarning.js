/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(limitMinutes = 30) {
setTimeout(() => {
    console.log("You've been here for a while. Take a break and rest your eyes! 😊");
}, limitMinutes*60*1000);
}

// Example usage
startScreenTimeWarning(1/60);
