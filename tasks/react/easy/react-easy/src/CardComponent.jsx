import React from 'react';
import "./index.css";

const CardComponent = () => {
  return (
    <>
      <h1>React/Vite - Easy</h1>
      <div className="card">
        <img src="https://loremflickr.com/320/240" alt="Random Image" />
        <h2>Card Title</h2>
        <p>Card Description</p>
      </div>
    </>
  );
};

export default CardComponent;
