/**
 * screenTimeWarning.js
 * Create a small JavaScript function called startScreenTimeWarning to track how long a user spends on a webpage.
 * After a set time limit, it should display a friendly reminder in console to take a break.
 *
 * Author: v-hasini (GitHub)
 * Date: November 2025
 */

function startScreenTimeWarning(limitMinutes = 30) {
    // 1. Convert minutes to milliseconds
    const msLimit = limitMinutes * 60 * 1000;
  
    console.log(`%c Timer set for ${limitMinutes} minutes. Work hard, but don't forget to blink!`, "color: #3498db; font-style: italic;");
  
    // 2. Set the timeout
    setTimeout(() => {
      // 3. The friendly reminder using CSS styling in the console
      console.warn(
        "%c Time for a Screen Break! \n" +
        `You've been focused for ${limitMinutes} minutes. \n` +
        "Stand up, stretch your back, and look at something 20 feet away.",
        "background: #222; color: #ffcc00; font-size: 1.2rem; padding: 10px; border-radius: 5px; border: 2px solid #ffcc00;"
      );
    }, msLimit);
  }
  
  // Example usage: 10-minute warning
  startScreenTimeWarning(10);
