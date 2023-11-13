import React from "react";

const TodoCard = ({ todo = {}, onDeleteClick = () => {}, onEditClick }) => {
  return (
    <div>
      <p>{todo?.title}</p>
      <button onClick={(id) => onDeleteClick(id)}>Delete</button>
      <button onClick={(id) => onEditClick(id)}>Edit</button>
    </div>
  );
};

export default TodoCard;
