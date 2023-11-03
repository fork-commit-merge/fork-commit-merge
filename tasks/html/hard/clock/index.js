// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
setInterval(() => {
  setClock();
  // TODO: Calculate the current time and update the clock hands' positions here.
  // You need to calculate the rotation ratios and update the hand rotations.
}, 1000);

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotate", rotationRatio * 360);
}

function setClock() {
  const date = new Date();

  const secondsRatio = date.getSeconds() / 60;
  const minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + date.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

setClock();
