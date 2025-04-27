// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.
setInterval(() => {
  setClock();
}, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

const numbers = document.getElementById('numbers');
for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.classList.add('number');
  number.textContent = i;
  number.style.setProperty('--rotation', `${i * 30}deg`);
  numbers.appendChild(number);
}

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
function setRotation(element, rotation) {
  element.style.setProperty("--rotation", rotation*360)
}

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds() / 60;
  const minutes = (seconds + now.getMinutes()) / 60;
  const hours = (minutes + now.getHours()) / 12;

  setRotation(secondHand, seconds);
  setRotation(minuteHand, minutes);
  setRotation(hourHand, hours);
}

setClock();
