// React - Medium

import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Load todos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
    setLoaded(true);
  }, []);

  // Save todos to localStorage only after loading
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, loaded]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={editId ? handleUpdate : handleAdd} style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={editId ? editText : input}
          onChange={(e) => (editId ? setEditText(e.target.value) : setInput(e.target.value))}
          placeholder="Enter a to-do"
          style={{ padding: "0.5em", width: 200 }}
        />
        <button type="submit" style={{ marginLeft: 8 }}>
          {editId ? "Update" : "Add"}
        </button>
        {editId && (
          <button type="button" onClick={() => { setEditId(null); setEditText(""); }} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        )}
      </form>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: 400, margin: "0 auto" }}>
        {todos.map((todo) => (
          <li key={todo.id} className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <span>{todo.text}</span>
            <span>
              <button onClick={() => handleEdit(todo.id, todo.text)} style={{ marginRight: 8 }}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
