// React/Vite - Easy
import "./index.css";

function App() {
  return (
    <div className="center">
      <div style={{
        maxWidth: "320px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#fff"
      }}>
        <img
          src="https://picsum.photos/320/240"
          alt="Random"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div style={{ padding: "16px" }}>
          <h2 style={{ margin: "0 0 8px", fontSize: "18px" }}>Card Title</h2>
          <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>This is a simple card component displaying a random image.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
