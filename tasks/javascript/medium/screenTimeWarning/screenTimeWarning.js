/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(limitMinutes = 30) {
    // Convert minutes to milliseconds
    const limitMs = limitMinutes * 60 * 1000;
    
    // Record the start time
    const startTime = Date.now();
    
    console.log(`Screen time tracking started. You'll be reminded to take a break after ${limitMinutes} minute(s).`);
    
    // Set a timeout to display the warning
    const timerId = setTimeout(() => {
        const elapsedMinutes = Math.floor((Date.now() - startTime) / 60000);
        console.log(`⏰ Screen Time Warning: You've been on this page for ${elapsedMinutes} minute(s)! Consider taking a break to rest your eyes. 👀`);
    }, limitMs);
    
    // Return an object with methods to check elapsed time or cancel the warning
    return {
        getElapsedTime: () => {
            return Math.floor((Date.now() - startTime) / 60000);
        },
        cancel: () => {
            clearTimeout(timerId);
            console.log('Screen time warning cancelled.');
        }
    };
}

// Example usage
startScreenTimeWarning(10);
