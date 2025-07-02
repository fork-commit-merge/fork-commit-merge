// React.js - Medium 2
import { useEffect, useState } from "react";
import "./App.css";

// Possible light states
type Light = "red" | "green" | "yellow";

export function TrafficLight() {
  const [activeLight, setActiveLight] = useState<Light>("red");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Change the light based on the current active light
    switch (activeLight) {
      case "red":
        timer = setTimeout(() => setActiveLight("green"), 4000);
        break;
      case "green":
        timer = setTimeout(() => setActiveLight("yellow"), 3000);
        break;
      case "yellow":
        timer = setTimeout(() => setActiveLight("red"), 1000);
        break;
    }

    return () => clearTimeout(timer); // Clean up the timeout
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === "red" ? "active" : ""}`} />
      <div className={`light yellow ${activeLight === "yellow" ? "active" : ""}`} />
      <div className={`light green ${activeLight === "green" ? "active" : ""}`} />
    </div>
  );
}
