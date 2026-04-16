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

    console.log(`Screen time warning started. Reminder will appear in ${limitMinutes} minute(s).`);

    setTimeout(() => {
        console.log("Time for a short break! Step away, stretch, and rest your eyes.");
    }, limitMilliseconds);
}

// Example usage
startScreenTimeWarning(10);
