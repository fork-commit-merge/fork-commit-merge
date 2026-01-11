import { useEffect, useState } from "react";
import "./App.css";

const sequence = [
  { color: "red", duration: 4000 },
  { color: "yellow", duration: 3000 },
  { color: "green", duration: 1000 },
];

export function TrafficLight() {
  const [active, setActive] = useState("red");

  useEffect(() => {
    let index = 0;

    const runTrafficLight = () => {
      const { color, duration } = sequence[index];
      setActive(color);

      index = (index + 1) % sequence.length;

      timeoutId = setTimeout(runTrafficLight, duration);
    };

    let timeoutId = setTimeout(runTrafficLight, sequence[0].duration);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="traffic-light">
      <div className={`light red ${active === "red" ? "active" : ""}`} />
      <div className={`light yellow ${active === "yellow" ? "active" : ""}`} />
      <div className={`light green ${active === "green" ? "active" : ""}`} />
    </section>
  );
}
