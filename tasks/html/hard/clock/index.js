const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
function setClock() {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio =
    (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio =
    (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

// Initialize clock immediately on page load
setClock();

// Update clock every second
setInterval(setClock, 1000);