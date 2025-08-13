function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = minutes * 6 + seconds * 0.1; // smooth move
  const hourDeg = hours * 30 + minutes * 0.5; // 360 / 12 = 30 per hour

  const secondHand = document.querySelector('[data-hand="second"]');
  const minuteHand = document.querySelector('[data-hand="minute"]');
  const hourHand = document.querySelector('[data-hand="hour"]');

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

// Update every second
setInterval(updateClock, 1000);

// Run once at start
updateClock();
