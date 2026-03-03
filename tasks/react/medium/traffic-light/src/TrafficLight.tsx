// React.js - Medium 2
import { useState, useEffect } from "react";
import "./App.css";

type LightColor = "red" | "yellow" | "green";

const CYCLE: LightColor[] = ["red", "yellow", "green"];
const DURATIONS: Record<LightColor, number> = { red: 3000, yellow: 1000, green: 3000 };

export function TrafficLight() {
  const [current, setCurrent] = useState<LightColor>("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((c) => {
        const idx = CYCLE.indexOf(c);
        return CYCLE[(idx + 1) % CYCLE.length];
      });
    }, DURATIONS[current]);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="traffic-light">
      {CYCLE.map((color) => (
        <div
          key={color}
          className={`light ${color}${current === color ? " active" : ""}`}
        />
      ))}
    </div>
  );
}
