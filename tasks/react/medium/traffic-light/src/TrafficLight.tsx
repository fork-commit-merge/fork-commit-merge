// React.js - Medium 2
import { useEffect, useState } from "react";
import "./App.css";

enum TrafficLightColor {
  RED,
  YELLOW,
  GREEN
}

interface ColorDuration{
  red: number;
  green: number;
  yellow: number;
}


export function TrafficLight() {

  const [activeColor, setActiveColor] = useState<TrafficLightColor>(TrafficLightColor.RED);
  const [prevActiveColor, setPrevActiveColor] = useState<TrafficLightColor>(TrafficLightColor.YELLOW);

  const colorDurations: ColorDuration= {
    red: 4000,
    green: 3000,
    yellow: 1000,
  };

  const changeActiveColor = (prevColor: TrafficLightColor) :number => {
    let color: number= TrafficLightColor.RED;
    
    if(prevActiveColor === TrafficLightColor.RED) {
      color = TrafficLightColor.GREEN;
    }
    if (prevColor === TrafficLightColor.RED) {
      color = TrafficLightColor.YELLOW;
      setPrevActiveColor(prevColor);
    }
    if (prevColor === TrafficLightColor.GREEN) {
      color = TrafficLightColor.YELLOW;
      setPrevActiveColor(prevColor);
    }
    return color;
  }

  useEffect(() => {

    const access = (color: TrafficLightColor) => {
      switch(color){
        case TrafficLightColor.RED:
          return colorDurations.red;
        case TrafficLightColor.YELLOW:
          return colorDurations.yellow;
        case TrafficLightColor.GREEN:
          return colorDurations.green;
      }
    };

    const interval = setInterval(() => {
      setActiveColor((prevColor: TrafficLightColor) => 
        changeActiveColor(prevColor)
      );
    }, access(activeColor));

    return () => clearInterval(interval);
  }, [activeColor]);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeColor === TrafficLightColor.RED ? 'active' : ''}`} />
      <div className={`light yellow ${activeColor === TrafficLightColor.YELLOW ? 'active' : ''}`} />
      <div className={`light green ${activeColor === TrafficLightColor.GREEN ? 'active' : ''}`} />
    </div>
  );
}

