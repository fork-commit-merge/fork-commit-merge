// src/TrafficLight.tsx

import React, { useState, useEffect } from "react";
import "./App.css";

const TrafficLight: React.FC = () => {
  const [activeLight, setActiveLight] = useState<string>("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (activeLight) {
        case "red":
          setActiveLight("green");
          setTimeout(() => setActiveLight("yellow"), 4000); // Change to yellow after 4 seconds of red
          break;
        case "green":
          setActiveLight("yellow");
          setTimeout(() => setActiveLight("red"), 3000); // Change to red after 3 seconds of green
          break;
        case "yellow":
          setActiveLight("red");
          setTimeout(() => setActiveLight("green"), 1000); // Change to green after 1 second of yellow
          break;
        default:
          setActiveLight("red");
          break;
      }
    }, 8000); // Total cycle duration: 8 seconds (4s red + 3s green + 1s yellow)

    return () => clearInterval(intervalId);
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === "red" ? "active" : ""}`} />
      <div className={`light yellow ${activeLight === "yellow" ? "active" : ""}`} />
      <div className={`light green ${activeLight === "green" ? "active" : ""}`} />
    </div>
  );
};

export default TrafficLight;
