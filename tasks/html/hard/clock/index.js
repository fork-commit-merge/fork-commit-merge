// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
  // TODO: Calculate the current time and update the clock hands' positions here.

  // You need to calculate the rotation ratios and update the hand rotations.


const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.
function setRotation(element,rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360);
}


// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
function setClock(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsRatio = seconds / 60;

  const minutes = now.getMinutes();
  const minutesRatio = (secondsRatio + minutes) / 60;

  const hours = now.getHours() % 12
  const hoursRatio = (minutesRatio + hours) / 12

  setRotation(secondHand,secondsRatio);
  setRotation(minuteHand,minutesRatio);
  setRotation(hourHand,hoursRatio);
}

setClock();
setInterval(setClock,1000);