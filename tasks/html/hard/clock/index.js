const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// Function to set the rotation of a DOM element based on rotationRatio
function setRotation(element, rotationRatio) {
  const rotation = rotationRatio * 360; // Calculate the rotation in degrees
  element.style.transform = `translateX(-50%) translateY(-0%) rotate(${rotation}deg)`;
}

// Function to update the clock hands' positions based on the current time
function setClock() {
  const now = new Date();
  const hours = now.getHours() % 12; // Get hours in 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate rotation ratios for each clock hand
  const hourRotation = (hours + minutes / 60) / 12;
  const minuteRotation = (minutes + seconds / 60) / 60;
  const secondRotation = seconds / 60;

  // Update the clock hands' positions
  setRotation(hourHand, hourRotation);
  setRotation(minuteHand, minuteRotation);
  setRotation(secondHand, secondRotation);
}

// Call the setClock function initially to set the clock's initial position
setClock();

// Set up an interval to update the clock every second
setInterval(setClock, 1000);
