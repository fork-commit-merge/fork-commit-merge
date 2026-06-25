// React.js - Medium 2
import "./App.css";

// TODO: Implement  the TrafficLight component
import { useEffect, useState } from "react";
export function TrafficLight() {

  let activeRed:string = "notActive"
  let activeYellow:string = "notActive"
  let activeGreen:string = "notActive"

  interface myColours{
    red:string,
    yellow:string,
    green:string
  }
  const [colour, setColour] = useState<myColours>({
    red:"",
    yellow:"",
    green:""
  })
  useEffect(()=>{

    const loop=()=>{
      setColour(prev=>({...prev,red:"active",yellow:"",green:""}))

      setTimeout(()=>{
        setColour({
          red:"",
          yellow:"active",
          green:""
        })
      },4000)

      setTimeout(()=>{
        setColour({
          red:"",
          yellow:"",
          green:"active"
        })
      },6000)

    }

    loop()
    const interval = setInterval(loop,8000)
    return () => clearInterval(interval);

  },[])


  return (
    <div className="traffic-light">
        <div className={`light red ${colour.red}`}></div>
        <div className={`light yellow ${colour.yellow}`}></div>
        <div className={`light green ${colour.green}`}></div>
    </div>
  );
}
