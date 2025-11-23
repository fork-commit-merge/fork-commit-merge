// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setRotation(hand, rotationRatio) {
  if (hand) {
    hand.style.transform = `rotate(${rotationRatio}deg)`;
  }
}

function setClock() {
  const dateNow = new Date();

  const seconds = dateNow.getSeconds();
  const secondsRotation = seconds * 6;
  const minutes = dateNow.getMinutes();
  const minuteRotation = minutes * 6;
  const hours = dateNow.getHours() % 12;
  console.log(hours);
  const hourRotation = hours * 30;

  setRotation(secondHand, secondsRotation);
  setRotation(minuteHand, minuteRotation);
  setRotation(hourHand, hourRotation);
}

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
window.onload = setClock;
setInterval(setClock, 1000);
