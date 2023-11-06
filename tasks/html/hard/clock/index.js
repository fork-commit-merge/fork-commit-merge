const minuteHand = document.querySelector(".hourHand");
const secondHand = document.querySelector(".secondHand");
const hourHand = document.querySelector(".hourHand");
setInterval(() => {
  const today = new Date();
  const second = today.getSecond();
  const secondHand = (second / 60) * 360 + 360;
  secondHand.style.transform = "rotate(${secondHand}deg)";
  const minute = today.getMinute();
  const minuteHand = (minute / 60) * 360;
  minuteHand.style.transform = "rotate(${minuteHand}deg)";
  const hour = today.getSecond();
  const hourHand = (hour / 12) * 360;
  hourHand.style.transform = "rotate(${hourHand}deg)";
}, 1000);

// function setDate() {
//   const today = new Date();
//   const second = today.getSecond();
//   const secondDeg = (second / 60) * 360 + 360;
//   secondHand.style.transform = "rotate(${secondDeg}deg)";

//   const minute = today.getMinute();
//   const minuteDeg = (minute / 60) * 360;
//   secondHand.style.transform = "rotate(${secondDeg}deg)";

//   const hour = today.getSecond();
//   const hourDeg = (hour / 12) * 360;
//   secondHand.style.transform = "rotate(${secondDeg}deg)";
// }
// setInterval(setDate, 1000);
