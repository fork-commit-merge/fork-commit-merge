// React/Vite - Easy
import "./index.css";

function App() {
  return (
    <div className="center">
      {/* TODO: Implement the card component */}
        <h1>React/Vite - Easy</h1>
        <div className="card">
             <img  className="card img" src="https://picsum.photos/320/240" alt="Random user" />
             <h2 style={{alignItems: "center", justifyContent: "center", display: "flex"}} >Card Title</h2>
             <p style={{alignItems: "center", justifyContent: "center", display: "flex"}}>Card Description</p>
        </div>
         
    </div>
  );
}

export default App;