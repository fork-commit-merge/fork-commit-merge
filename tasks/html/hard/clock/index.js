// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
setInterval(() => {
  // Calculate the current time and update the clock hands' positions here.
  setClock();
}, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.
function setRotation(element, rotationRatio) {
  // rotationRatio is between 0 and 1; multiply by 360 to get degrees
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// Compute current time and set the hands
function setClock() {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();

  const secondsRatio = seconds / 60;
  const minutesRatio = (minutes + secondsRatio) / 60;
  const hoursRatio = ((hours % 12) + minutesRatio) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

// Call the setClock function here to initialize the clock's position when the page loads
setClock();
