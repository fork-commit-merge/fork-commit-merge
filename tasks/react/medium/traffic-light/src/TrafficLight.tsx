// React.js - Medium 2
import { useEffect,useState } from "react";
import "./App.css";


// TODO: Implement  the TrafficLight component

const timer ={
  red  : 4,
  yellow : 2,
  green: 3
}
const theTotalTime :number =timer.red + timer.yellow + timer.green; 
const red = timer.red;
const yellow = timer.yellow +red;
const green = timer.green + yellow 
console.log(red ,yellow ,green)



export function TrafficLight() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
   const intervalId =  setInterval(()=>{
      setCounter((prev)=>{
        
        console.log(prev)
        if (prev>=theTotalTime) {
          return 0
          
        }

        
        return prev+1})
    },1000)
  
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  

  return (
    <>
      <div className={`traffic-light  light  red ${(counter>=0 && counter< red ? "active":"unactive")}`} ></div>
      <div className={`traffic-light light  yellow ${(counter>=red && counter < yellow ? "active":"unactive")} `} ></div>
      <div className={`traffic-light light  green ${(counter>=yellow && counter < green ? "active":"unactive")} `} ></div>
    </>
    // TODO: return JSX here
  );
}
