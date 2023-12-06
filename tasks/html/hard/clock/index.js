function setClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");
  const secondHand = document.getElementById("secondHand");

  // Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
  // TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.

  const hourRotation = (((hours % 12) + minutes / 60) * 360) / 12;
  const minuteRotation = ((minutes + seconds / 60) * 360) / 60;
  const secondRotation = (seconds * 360) / 60;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
  console.log("hey");
}

// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.

setInterval(
  // TODO: Calculate the current time and update the clock hands' positions here.
  // You need to calculate the rotation ratios and update the hand rotations.
  setClock,
  1000
);

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.

setClock();
