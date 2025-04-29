// Update the positions of the hour, minute, and second hands on the clock based on the current time
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (currentDate.getMinutes() + secondsRatio) / 60;
  const hoursRatio = (currentDate.getHours() + minutesRatio) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

// Rotate a DOM element around its center point based on the provided rotation ratio
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

// Initialize clock position when the page loads
setClock();
// Update clock position every second
setInterval(setClock, 1000);

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
