// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
function setClock() {
  const currentDate = new Date();
  const second = currentDate.getSeconds();
  const minute = currentDate.getMinutes();
  const hour = currentDate.getHours() % 12 + minute / 60;
  
  const secondRotation = second * 6; // 6 degrees per second
  const minuteRotation = minute * 6; // 6 degrees per minute
  const hourRotation = hour * 30; // 30 degrees per hour

  // Update clock hands' rotations
  setRotation("[data-second-hand]", secondRotation);
  setRotation("[data-minute-hand]", minuteRotation);
  setRotation("[data-hour-hand]", hourRotation);
}

setInterval(() => {
  setClock();
}, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.
function setRotation(elementSelector, rotationAngle) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.style.transform = `rotate(${rotationAngle}deg)`;
  }
}

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
setClock();