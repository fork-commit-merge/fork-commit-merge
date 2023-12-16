// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
var h = 0;
var m = 0;
var s = 0;
var today = new Date();

setInterval(() => {
  // TODO: Calculate the current time and update the clock hands' positions here.
  // You need to calculate the rotation ratios and update the hand rotations.
  today = new Date();
  h = today.getHours() * 30;
  m = today.getMinutes() * 6;
  s = today.getSeconds() * 6;

  document.getElementById("second-hand").style.transform =
    "rotate(" + s + "deg)";
  document.getElementById("minute-hand").style.transform =
    "rotate(" + m + "deg)";
  document.getElementById("hour-hand").style.transform = "rotate(" + h + "deg)";
}, 1000);

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.
function setRotation() {}
// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
