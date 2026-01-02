// JavaScript - Medium

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
function countdownTimer() {
    let seconds = 10;
    
    const timer = setInterval(() => {
        console.log(seconds);
        seconds--;
        
        if (seconds < 0) {
            console.log("Time's up!");
            clearInterval(timer);
        }
    }, 1000);
}

// Start the countdown
countdownTimer();