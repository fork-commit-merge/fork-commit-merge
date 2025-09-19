// React.js - Medium 2
import "./App.css";
import { useEffect, useState } from "react";

// TODO: Implement  the TrafficLight component

export function TrafficLight() {
  const [active, setActive] = useState("red");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (active === "red") {
      timer = setTimeout(() => setActive("yellow"), 4000);
    } else if (active === "yellow") {
      timer = setTimeout(() => setActive("green"), 3000);
    }else if (active === "green") {
      timer = setTimeout(() => setActive("red"), 1000);
    } 

    return () => clearTimeout(timer); // cancels the old timer that was set and sets a new timer for the current state.

  },[active]);

  return (
    // TODO: return JSX here

    <div className="traffic-light">
      <div
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "50%",
          backgroundColor: active === "red" ? "red" : "gray",
        }}
      >
        {" "}
      </div>
      <div
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "50%",
          backgroundColor: active === "yellow" ? "yellow" : "gray",
        }}
      ></div>
      <div
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "50%",
          backgroundColor: active === "green" ? "green" : "gray",
        }}
      >
        {" "}
      </div>
    </div>
  );
}
