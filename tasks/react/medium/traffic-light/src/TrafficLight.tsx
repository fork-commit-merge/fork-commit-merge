// React.js - Medium 2
import { useEffect, useState } from "react";
import "./App.css";

// TODO: Implement  the TrafficLight component

export function TrafficLight() {
  const [active, setActive] = useState('red')
  useEffect(() => {
    if (active === 'red') {
      let ti = setTimeout(() => {
        setActive('green')
      }, 4000)
      return () => clearTimeout(ti);
    } else if (active === 'green') {
      let ti = setTimeout(() => {
        setActive('yellow')
      }, 3000)
      return () => clearTimeout(ti);
    } else {
      let ti = setTimeout(() => {
        setActive('red')
      }, 1000)
      return () => clearTimeout(ti);
    }
  }, [active])

  return (
    // TODO: return JSX here
    <div className="traffic-light">
      <h2>Traffic Light</h2>
      <div className="traffic-light-div">
        <div className={`red light ${active === 'red' ? 'active' : ''}`} ></div>
        <div className={`green light ${active === 'green' ? 'active' : ''}`}></div>
        <div className={`yellow light ${active === 'yellow' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}
