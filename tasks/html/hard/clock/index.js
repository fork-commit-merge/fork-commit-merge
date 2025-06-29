function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

function setClock() {
  const hourHand = document.querySelector("[data-hour-hand]");
  const minuteHand = document.querySelector("[data-minute-hand]");
  const secondHand = document.querySelector("[data-second-hand]");

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondRotation = seconds / 60;
  const minuteRotation = (minutes + secondRotation) / 60;
  const hourRotation = (hours % 12 + minuteRotation) / 12;

  setRotation(hourHand, hourRotation);
  setRotation(minuteHand, minuteRotation);
  setRotation(secondHand, secondRotation);
}

setInterval(setClock, 1000);
setClock();
