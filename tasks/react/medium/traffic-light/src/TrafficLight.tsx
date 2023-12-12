import React, { useState, useEffect } from "react";
import "./App.css";

type Light = "red" | "yellow" | "green";

export function TrafficLight() {
  const [activeLight, setActiveLight] = useState<Light>("red");

  useEffect(() => {
    const cycle = {
      red: 4000, // Red light duration in milliseconds
      green: 3000, // Green light duration
      yellow: 1000, // Yellow light duration
    };

    const nextLight = {
      red: "green",
      green: "yellow",
      yellow: "red",
    };

    const timeoutId = setTimeout(() => {
      setActiveLight((current) => nextLight[current]);
    }, cycle[activeLight]);

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === "red" ? "active" : ""}`} />
      <div
        className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}
      />
      <div
        className={`light green ${activeLight === "green" ? "active" : ""}`}
      />
    </div>
  );
}
