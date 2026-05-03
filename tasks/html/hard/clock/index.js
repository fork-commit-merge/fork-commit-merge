const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

// Create setRotation function to rotate a DOM element around its center point
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// Implement the setClock function to update the positions of the hour, minute, and second hands
function setClock() {
  const currentDate = new Date();
  const seconds = (currentDate.getSeconds() + currentDate.getMilliseconds() / 1000) / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;
  
  setRotation(secondHand, seconds);
  setRotation(minuteHand, minutes);
  setRotation(hourHand, hours);
}

// Update the clock continuously for smooth second hand movement
setInterval(setClock, 50);

// Initialize the clock's position when the page loads
setClock();
