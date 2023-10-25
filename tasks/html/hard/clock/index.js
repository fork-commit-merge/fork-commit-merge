// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
setInterval(() => {
  // TODO: Calculate the current time and update the clock hands' positions here.
  // You need to calculate the rotation ratios and update the hand rotations.
  d = new Date();
  sec = d.getSeconds();
  min = d.getMinutes();
  hr = d.getHours();
  secTR = 6 * sec;
  minTR = 6* min;
  hrTR = 30 * hr + min / 2;
  setRotation();
}, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
function setRotation() {
  second.style.transform = `rotate(${secTR}deg)`;
  minute.style.transform = `rotate(${minTR}deg)`;
  hour.style.transform = `rotate(${hrTR}deg)`;
}
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
function setClock() {

  const d = new Date();
  const sec = d.getSeconds();
  const min = d.getMinutes();
  const hr = d.getHours();
  const secTR = 6 * sec;
  const minTR = 6 * min;
  const hrTR = 30 * hr + min / 2;

  second.style.transform = `rotate(${secTR}deg)`;
  minute.style.transform = `rotate(${minTR}deg)`;
  hour.style.transform = `rotate(${hrTR}deg)`;
}
window.addEventListener("load", setClock);