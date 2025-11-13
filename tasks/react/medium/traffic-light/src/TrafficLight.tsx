// React.js - Medium 2
import { useEffect, useState } from "react";
import "./App.css";
import TrafficLightItem from "./components/TrafficLightItem";
import { LightColor } from "./types/core";

// TODO: Implement  the TrafficLight component
const SEQUENCES: { light: LightColor, duration: number }[] = [
  { light: "red", duration: 4 },
  { light: "green", duration: 3 },
  { light: "yellow", duration: 1 },
];

export function TrafficLight() {
  const [currentLightIndex, setCurrentLightIndex] = useState<number>(0);
  const getActiveLightName = () => SEQUENCES[currentLightIndex].light;

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentLightIndex(prev => {
        return prev + 1 >= SEQUENCES.length ? 0 : prev + 1
      })
    }, SEQUENCES[currentLightIndex].duration * 1000)

    return () => clearTimeout(interval);
  }, [currentLightIndex])

  return (
    <div className="traffic-light">
      {SEQUENCES.map((x, key) => (
        <TrafficLightItem key={key} type={x.light} isActive={x.light == getActiveLightName()} />
      ))}
    </div>
  );
}
