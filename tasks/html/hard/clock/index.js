// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
function updateClock() {
    console.log("Running");
    
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourRotation = (hours * 30) + (0.5 * minutes);
    const minuteRotation = (minutes * 6) + (0.1 * seconds);
    const secondRotation = seconds * 6;

    console.log(hourRotation, minuteRotation, secondRotation);

    hourHand.style.transform = `translateX(-50%) translateY(0) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) translateY(0) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) translateY(0) rotate(${secondRotation}deg)`;
    
}


setInterval(updateClock, 1);

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
