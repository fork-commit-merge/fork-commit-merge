// React/Vite - Easy
import "./index.css";

function App() {
  return (
    <div className="center">
      {/* TODO: Implement the card component */}
      <h1>React/Vite - Easy</h1>
      <Card />
    </div>
  );
}

function Card() {
  return <div>
    <img src="https://picsum.photos/320/240" alt="A random image" />
    <h2>Card title</h2>
    <p>Card Description</p>
  </div>
}

export default App;
