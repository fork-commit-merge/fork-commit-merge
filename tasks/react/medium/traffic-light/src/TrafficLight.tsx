import React, { useState, useEffect } from "react";
import "./App.css";

interface LightProps {
  color: string;
  active: boolean;
}

const Light: React.FC<LightProps> = ({ color, active }) => {
  return <div className={`light ${color} ${active ? "active" : ""}`} />;
};

const TRAFFIC_LIGHT_SEQUENCE = [
  { color: "red", duration: 4000 },
  { color: "green", duration: 3000 },
  { color: "yellow", duration: 1000 }
];

export const TrafficLight: React.FC = () => {
  const [currentLightIndex, setCurrentLightIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLightIndex(prevIndex => (prevIndex + 1) % TRAFFIC_LIGHT_SEQUENCE.length);
    }, TRAFFIC_LIGHT_SEQUENCE[currentLightIndex].duration);
    return () => clearInterval(interval);
  }, [currentLightIndex]);

  return (
    <div className="traffic-light">
      {TRAFFIC_LIGHT_SEQUENCE.map((light, index) => (
        <Light
          key={index}
          color={light.color}
          active={index === currentLightIndex}
        />
      ))}
    </div>
  );
};
