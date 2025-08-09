import React, { useState } from "react";
import "./index.css";

const images = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
];

function Card() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageUrl = images[randomIndex];
  const [loading, setLoading] = useState(true);

  return (
    <div className="card">
      {loading && <p>Loading image...</p>}
      <img
        src={imageUrl}
        alt="Random"
        onLoad={() => setLoading(false)}
        style={loading ? { display: "none" } : {}}
      />
    </div>
  );
}

function App() {
  return (
    <div className="center">
      <h1>Random Image Card</h1>
      <Card />
    </div>
  );
}

export default App;
