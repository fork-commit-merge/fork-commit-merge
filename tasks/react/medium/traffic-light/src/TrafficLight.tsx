import React, { useEffect, useState } from "react";
import "./App.css";

type Light = "red" | "green" | "yellow";

const sequence: { light: Light; duration: number }[] = [
  { light: "red", duration: 4000 },
  { light: "green", duration: 3000 },
  { light: "yellow", duration: 1000 },
];

export const TrafficLight: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % sequence.length);
    }, sequence[index].duration);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="traffic-light">
      <div className={`light red${sequence[index].light === "red" ? " active" : ""}`}></div>
      <div className={`light yellow${sequence[index].light === "yellow" ? " active" : ""}`}></div>
      <div className={`light green${sequence[index].light === "green" ? " active" : ""}`}></div>
    </div>
  );
};
