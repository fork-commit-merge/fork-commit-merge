import "./index.css";
import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {

    fetch("https://picsum.photos/300/200")
      .then((response) => {

        setImage(response.url);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="center">
      {image ? (
        <img src={image} alt="Random" className="card img" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
