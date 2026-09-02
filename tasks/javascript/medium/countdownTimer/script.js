// JavaScript - Medium
let time=10;
function change(){
    const element=document.getElementById("timer");
    time=time-1;
    element.innerHTML=`00:${time}`;
    if(time===0){
        const element2=document.createElement("h2");
        element2.innerHTML="Time's up!";
        document.body.append(element2);
        clearInterval(interval);
    }
}
const interval=setInterval(change,1000);

// Create functionality for a countdown timer that counts down from 10 seconds to zero using JavaScript
