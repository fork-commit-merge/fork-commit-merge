// Implement the setClock function to update the positions of the hour, minute, and second hands on the clock based on the current time.

// Create setRotation function to rotate a DOM element around its center point. This function will be used to rotate the hour, minute, and second hands on the clock.
// TODO: Implement the setRotation function to update the rotation of a DOM element based on the provided rotationRatio.

// TODO: You can call the setClock function here to initialize the clock's position when the page loads.
var hour = document.getElementById("hour_clock");
var minute = document.getElementById("minute_clock");
var seconds = document.getElementById("second_clock");
var numbersContainer = document.querySelector('.numbers');

// Function to create and append numbers to the clock
function createNumbers() {
  for (let i = 1; i <= 12; i++) {
     const number = document.createElement('div');
     number.classList.add('number');
     number.textContent = i;
     number.style.transform = `rotate(${(i - 1) * 30}deg) translateY(-75px) translateX(-4px)`;
     numbersContainer.appendChild(number);
  }
}

// Call the function to create numbers only if they don't exist
if (numbersContainer.children.length === 0) {
  createNumbers();
}

// Update the clock hands every second
var addClock = setInterval(function clock() {
  var date_now = new Date();
  var hr = date_now.getHours();
  var min = date_now.getMinutes();
  var sec = date_now.getSeconds();

  var calc_hr = hr * 30 + min / 2;
  var calc_min = min * 6;
  var calc_sec = sec * 6;

  hour.style.transform = "rotate(" + calc_hr + "deg)";
  minute.style.transform = "rotate(" + calc_min + "deg)";
  seconds.style.transform = "rotate(" + calc_sec + "deg)";
}, 1000);

