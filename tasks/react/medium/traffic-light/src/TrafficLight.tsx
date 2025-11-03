import "./App.css";

// React.js - Medium 2
// TODO: Implement  the TrafficLight component

import { useEffect, useRef, useState } from "react";

type Light = "red" | "yellow" | "green";

const DURATIONS: Record<Light, number> = {
  red: 4000,
  green: 3000,
  yellow: 1000,
};

export function TrafficLight(): JSX.Element {
  const [active, setActive] = useState<Light>("red");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev === "red" ? "green" : prev === "green" ? "yellow" : "red"));
    }, DURATIONS[active]);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [active]);

  return (
    <div className="traffic-light" role="group" aria-label="Traffic light">
      <div className={`light red ${active === "red" ? "active" : ""}`} aria-label="Red light" />
      <div className={`light yellow ${active === "yellow" ? "active" : ""}`} aria-label="Yellow light" />
      <div className={`light green ${active === "green" ? "active" : ""}`} aria-label="Green light" />
    </div>
  );
}
