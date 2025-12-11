/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(limitMinutes = 30) {
    const limit = limitMinutes * 60 * 1000;
    let timeElapsed = 0;

    const interval = setInterval(() => {
        timeElapsed += 1000;
        // console.log(`${timeElapsed.toFixed(0) / 1000} seconds have passed.`);

        if (timeElapsed >= limit - 1) {
            const breaktime = (limit / 1000) / 60;
            console.log(`It's been ${(breaktime)} minutes. Time to take a break.`);
            clearInterval(interval);
        }
    }, 1000);
}


// Example usage
startScreenTimeWarning(1);
