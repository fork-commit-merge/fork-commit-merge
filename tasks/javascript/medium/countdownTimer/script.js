// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript

for (let i=10; i>=0; i--) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * (10-i));
}