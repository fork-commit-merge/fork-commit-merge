// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero
let seconds = 10
let intervalId = null

function displayTimer(text) {
  const timerText = document.querySelector('#timer')
  timerText.textContent=text
}

function countdownSeconds() {
  const text = `00:${String(seconds).padStart(2,'0')}`
  if (seconds < 0) {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
    displayTimer('Time\'s up!')
  } else {
    console.log(text)
    displayTimer(text)

  }
  seconds--
}

intervalId = setInterval(countdownSeconds,1000)