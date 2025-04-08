import { useState, useEffect } from "react";
import "./App.css";

type LightColor = "red" | "yellow" | "green";

export function TrafficLight() {
  const [activeLight, setActiveLight] = useState<LightColor>("red");

  useEffect(() => {
    const changeLight = () => {
      setActiveLight((current) => {
        switch (current) {
          case "red":
            return "green";
          case "green":
            return "yellow";
          case "yellow":
            return "red";
          default:
            return "red";
        }
      });
    };

    let timer: number;
    if (activeLight === "red") {
      timer = setTimeout(changeLight, 4000); // Red for 4 seconds
    } else if (activeLight === "green") {
      timer = setTimeout(changeLight, 3000); // Green for 3 seconds
    } else {
      timer = setTimeout(changeLight, 1000); // Yellow for 1 second
    }

    return () => clearTimeout(timer);
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === "red" ? "active" : ""}`}></div>
      <div className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}></div>
      <div className={`light green ${activeLight === "green" ? "active" : ""}`}></div>
    </div>
  );
}