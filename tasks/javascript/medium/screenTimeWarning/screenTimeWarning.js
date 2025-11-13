/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(limitMinutes = 30) {
    const updateFunc = (seconds) => {
        console.log(formatTime(seconds));
    }

    const startTime = (updateFunc, seconds) => {
        let time = seconds;
        updateFunc(seconds); // first update

        const interval = setInterval(() => {
            updateFunc(Math.max(--time, 0)); // interval update
            if (time == 0) clearInterval(interval)
        }, 1000)
    }

    const formatTime = seconds => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    }

    startTime(updateFunc, limitMinutes * 60);
}

// Example usage
startScreenTimeWarning(1);
