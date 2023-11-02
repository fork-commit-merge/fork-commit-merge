// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero

let time = 10
let timer = document.getElementById("timer");

var setTimeCountDown = setInterval(CountDown, 1000)
function CountDown (){
    let seconds = time % 60
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    timer.innerHTML = `00:${seconds}`
    time-- 
    if(seconds == '0-1'){
        clearInterval(setTimeCountDown)
        timer.innerHTML = 'Time\'s Up!'
    }
}