// React - Medium

import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todoList")) || [];
    } catch {
      return [];
    }
  });
  const [item, setItem] = useState("");

  const handleAddClick = () => {
    if (!item.trim()) return;

    const updatedList = [...todoList, item];
    setTodoList(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
    setItem("");
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add to-do"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>

      <div>
        {todoList?.length ? (
          todoList?.map((item, index) => <h3 key={index}>{item}</h3>)
        ) : (
          <h3>Please add items in the list</h3>
        )}
      </div>
    </div>
  );
}

export default App;
