// JavaScript - Medium

// TODO: Create functionality for a countdown timer that counts down from 10 seconds to zero

const timer=document.getElementById("timer");
let time=10;

function updateTime(){
    time=time-1;
    if(time){
        timer.innerHTML=`00:${time}`;
    }
    else{
        timer.innerHTML="Time's up!";
        clearInterval(go);
    }
}

let go=setInterval(updateTime,1000);