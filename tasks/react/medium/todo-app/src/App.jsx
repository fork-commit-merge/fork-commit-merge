// React - Medium

import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [editBtn, setEditBtn] = useState(null);
  const addTodo = () => {
    if (!input.trim()) return;
    if(editBtn !== null){
      const newTodos = [...todos];
      newTodos[editBtn] = input;
      setTodos(newTodos);
      setEditBtn(null);
    }
    else{
      setTodos([...todos, input]);
    }
    setInput("");
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }
  const editTodo = (index) => {
    setInput(todos[index]);
    setEditBtn(index);

  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input type="text"
          placeholder="Enter To-Do..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>{editBtn !== null ? "Edit" : "Add"}</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index} style={{ marginTop: "10px" }}>
              {todo}
              <button
                onClick={() => editTodo(index)}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteTodo(index)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
