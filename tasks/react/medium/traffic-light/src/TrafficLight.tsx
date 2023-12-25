// React.js - Medium 2
import { useEffect, useState } from "react";
import "./App.css";

// TODO: Implement  the TrafficLight component

export function TrafficLight() {
  const [Redcolor, setRed] = useState("");
  const [Yellowcolor, setYellow] = useState("");
  const [Greencolor, setGreen] = useState("");
  
  
  const settingRed=()=> {
    
    setRed("Red");
    setGreen("");
      setTimeout(() => {
        settingYellow();
      }, 4000)};

      const settingYellow=()=> {
      
          setRed("");
          setYellow("Yellow");
        setTimeout(() => {
          
          settingGreen();
        }, 3000)};

        const settingGreen=() => {
        
            setYellow("");
            setGreen("Green");
          setTimeout(() => {
            
            settingRed();
          }, 1000)};
       
    useEffect(()=>{
       settingRed();
    },[]);    
    
    

  return (
    // TODO: return JSX here
  
    <div className="traffic-light-div">
      <div className="traffic-light">
        <div className={`light red ${(Redcolor=="Red" ?"active":"unactive")}`}></div>
        <div className={`light yellow ${(Yellowcolor=="Yellow" ?"active":"unactive")}`}></div>
        <div className={`light green ${(Greencolor=="Green" ?"active":"unactive")}`}></div>
      </div>
    </div>
  );
}
