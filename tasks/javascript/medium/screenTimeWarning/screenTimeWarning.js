/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */
function startScreenTimeWarning(limitMinutes = 30) {
    if (typeof limitMinutes !== 'number' || isNaN(limitMinutes) || limitMinutes <= 0) {
        console.error('Error: limitMinutes must be a positive number.');
        return null;
    }
    const timerId = setTimeout(() => {
        const plural = limitMinutes === 1 ? '' : 's';
        console.log(`You've been using this page for ${limitMinutes} minute${plural}. Take a break! 🧘`);
    }, limitMinutes * 60 * 1000);
    return timerId;
}
// Example usage
startScreenTimeWarning(10);