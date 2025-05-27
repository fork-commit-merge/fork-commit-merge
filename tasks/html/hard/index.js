// Get the clock hands
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// Function to set rotation of a DOM element
function setRotation(element, rotationRatio) {
    if (!element) return;
    element.style.transform = `translateX(-50%) rotate(${rotationRatio * 360}deg)`;
}

// Function to update the clock
function setClock() {
    const currentDate = new Date();
    
    // Calculate rotation ratios
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    
    // Update hand positions
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

// Update the clock every second
setInterval(setClock, 1000);

// Initialize the clock when the page loads
setClock();

// Add spans to clock numbers to make them readable
document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        const text = number.textContent;
        number.innerHTML = `<span>${text}</span>`;
    });
});