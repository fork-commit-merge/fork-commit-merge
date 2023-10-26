// Function to update the rotation of a DOM element based on the provided rotationRatio.
function setRotation(element, rotationRatio) {
  const degrees = rotationRatio * 360; // Convert the ratio to degrees
  element.style.transform = `rotate(${degrees}deg)`; // Apply the rotation to the element
}

// Function to update the clock hands' positions based on the current time.
function setClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate rotation ratios for each hand
  const hourRotation = (hours % 12 + minutes / 60) / 12; // 12-hour clock
  const minuteRotation = (minutes + seconds / 60) / 60;
  const secondRotation = seconds / 60;

  // Update the clock hands' positions using setRotation function
  setRotation(hourHand, hourRotation);
  setRotation(minuteHand, minuteRotation);
  setRotation(secondHand, secondRotation);
}

// Call setClock to initialize the clock's position when the page loads.
setClock();

// Set an interval to continuously update the clock hands every second.
setInterval(setClock, 1000);
