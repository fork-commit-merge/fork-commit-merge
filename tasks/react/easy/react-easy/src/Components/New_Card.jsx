// NewCard


const NewCard = () => {
  return (
    <div className="center">
      <h1>React/Vite - Easy</h1>
      <div className="card">
        <img
          src="https://picsum.photos/320/240"
          alt="Random image"
          className="card-image"
        />
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">Card Description</p>
      </div>
    </div>
  );
};

export default NewCard;
