import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div style={{ padding: "2rem", "text-align": "center" }}>
      <h1>Counter: {count()}</h1>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: "0.5rem 1.5rem",
          "font-size": "1.1rem",
          cursor: "pointer",
          "border-radius": "8px",
          border: "none",
          background: "#4f46e5",
          color: "white",
        }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount((c) => Math.max(0, c - 1))}
        style={{
          padding: "0.5rem 1.5rem",
          "font-size": "1.1rem",
          cursor: "pointer",
          "border-radius": "8px",
          border: "none",
          background: "#ef4444",
          color: "white",
          "margin-left": "0.5rem",
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          padding: "0.5rem 1.5rem",
          "font-size": "1.1rem",
          cursor: "pointer",
          "border-radius": "8px",
          border: "none",
          background: "#6b7280",
          color: "white",
          "margin-left": "0.5rem",
        }}
      >
        Reset
      </button>
      <p style={{"margin-top": "1rem", color: "#666"}}>
        A simple counter built with Solid.js reactive signals.
      </p>
    </div>
  );
}

export default Counter;
