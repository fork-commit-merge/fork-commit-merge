// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
setInterval(() => {
  // TODO: Calculate the current time and update the clock hands' positions here.
  // You need to calculate the rotation ratios and update the hand rotations.
}, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// Added: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.
function setRotation(element, rotationRatio) {
    // Calculate the degree of rotation based on the ratio (0 to 1)
    const degrees = rotationRatio * 360;

    // Apply the rotation to the element using CSS transform
    element.style.transform = `rotate(${degrees}deg)`;
}

// Assuming  have an HTML element with the ID "myElement" that want to rotate.
const elementToRotate = document.getElementById('myElement');
const rotationRatio = 0.5; // Example: rotate to 180 degrees (halfway)

setRotation(elementToRotate, rotationRatio);

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
