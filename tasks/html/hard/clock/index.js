// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const dateNow = new Date();

  const seconds = dateNow.getSeconds();
  const secondsRotation = seconds * 6;
  const minutes = dateNow.getMinutes();
  const minuteRotation = minutes * (1 / 60);
  const hours = dateNow.getHours();
  console.log(hours);
  const hourRotation = hours * (1 / 12);
  secondHand.style.transform = `rotate(${secondsRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}turn)`;
  hourHand.style.transform = `rotate(${hourRotation}turn)`;
}

setClock();
setInterval(setClock, 1000);
setInterval(() => {
  // TODO: Calculate the current time and update the clock hands' positions here.
  // You need to calculate the rotation ratios and update the hand rotations.
}, 1000);

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
