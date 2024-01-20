import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <img
        src="https://studybullet.com/wp-content/uploads/2023/09/5008906_e7cf.jpg"
        alt="Card Image"
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
