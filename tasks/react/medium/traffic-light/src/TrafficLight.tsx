import { useEffect, useState } from "react";
import "./App.css"; // Make sure App.css contains the light styles

export function TrafficLight() {
  // State to track which light is active
  const [active, setActive] = useState<"red" | "yellow" | "green">("red");

  useEffect(() => {
    const timer = setInterval(() => {
      // Traffic Light Sequence
      if (active === "red") setActive("green");
      else if (active === "green") setActive("yellow");
      else setActive("red");
    }, 2000); // Light changes every 2 seconds

    return () => clearInterval(timer);
  }, [active]);

  return (
    <div className="traffic-container">
      <div className={`light red ${active === "red" ? "active" : ""}`}></div>
      <div className={`light yellow ${active === "yellow" ? "active" : ""}`}></div>
      <div className={`light green ${active === "green" ? "active" : ""}`}></div>
    </div>
  );
}
