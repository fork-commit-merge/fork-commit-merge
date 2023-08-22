import React, { useState } from "react";
import "./index.css";
function App() {
  const [meme, setMeme] = useState({
   
    memes: "https://i.imgflip.com/8p0a.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  }
  const [memeData, setMemeData] = useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeData(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memeData.length);
    const url = memeData[randomNumber].url;
    setMeme((preValue) => ({
      ...preValue,
      memes: url,
    }));
    console.log(url);
  }

  return (
    <div className="center">
      
      
      <button className="card" onClick={getMemeImage}>
        Get New Image
      </button>
      
        <img className="card img" alt="Meme" src={meme.memes} />
       
      
    </div>
  );
}
export default App;
