// src/TrafficLight.tsx
import { useEffect, useState } from "react";

type LightColor = "red" | "yellow" | "green";

const DURATIONS: Record<LightColor, number> = {
  red: 4000,    // 4 seconds
  green: 3000,  // 3 seconds
  yellow: 1000, // 1 second
};

function getNextLight(current: LightColor): LightColor {
  switch (current) {
    case "red":
      return "green";
    case "green":
      return "yellow";
    case "yellow":
      return "red";
  }
}

const TrafficLight: React.FC = () => {
  const [activeLight, setActiveLight] = useState<LightColor>("red");

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setActiveLight((prev) => getNextLight(prev));
    }, DURATIONS[activeLight]);

    // Clean up timer when light changes or component unmounts
    return () => {
      window.clearTimeout(timerId);
    };
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === "red" ? "active" : ""}`.trim()}
      />
      <div
        className={`light yellow ${activeLight === "yellow" ? "active" : ""}`.trim()}
      />
      <div
        className={`light green ${activeLight === "green" ? "active" : ""}`.trim()}
      />
    </div>
  );
};

export default TrafficLight;
