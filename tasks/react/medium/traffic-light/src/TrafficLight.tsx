// React.js - Medium 2
import { useEffect, useState } from "react";
import "./App.css";

export function TrafficLight() {
  const [active, setActive] = useState(0); // 0 = red, 1 = yellow, 2 = green

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light">
      <div className={`circle ${active === 0 ? "red" : ""}`}></div>
      <div className={`circle ${active === 1 ? "yellow" : ""}`}></div>
      <div className={`circle ${active === 2 ? "green" : ""}`}></div>
    </div>
  );
}
