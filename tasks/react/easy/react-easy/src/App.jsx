// React/Vite - Easy
import React from "react";
import "./index.css"; 

const getRandomImageUrl = () => {
  return "https://loremflickr.com/320/240";
};

const Card = () => {
  return (
    <div className="center">
      <h1>React/Vite - Easy</h1>
      <div className="card">
        <img src={getRandomImageUrl()} alt="Random" />
        <h2>Card Title</h2>
        <p>Card Description</p>
      </div>
    </div>
  );
};

export default Card;

