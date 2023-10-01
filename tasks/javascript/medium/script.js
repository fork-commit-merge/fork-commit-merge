const timer = document.getElementById("timer");

if (timer) {
  let count = 10;
  timer.innerHTML = count;

  const interval = setInterval(() => {
    count--;
    timer.innerHTML = count;

    if (count === 0) {
      timer.innerHTML = count;

      setTimeout(() => {
        timer.innerHTML = "Time's up!";
      }, 1000);

      clearInterval(interval);
    }
  }, 1000);
}
