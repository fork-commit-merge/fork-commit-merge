// React/Vite - Easy
import "./index.css";

function App() {
  const cardData = {
    title: "Card Title",
    description: "Card Description",
    imageUrl: "https://picsum.photos/320/240",
  };

  return (
    <div className="center">
      <h1 className="title">React/Vite - Easy</h1>

      <div className="card" role="article">
        <img
          src={cardData.imageUrl}
          alt={cardData.title}
          className="card-image"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/320x240")
          }
        />

        <div className="card-content">
          <h2>{cardData.title}</h2>
          <p>{cardData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
