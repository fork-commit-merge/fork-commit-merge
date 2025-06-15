// React - Medium

import "./App.css";
import React, { useEffect, useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Load todos from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch {
        setTodos([]);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddOrUpdate = () => {
    if (!input.trim()) return;
    if (editId !== null) {
      setTodos(todos.map(todo => todo.id === editId ? { ...todo, text: input } : todo));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }
    setInput("");
  };

  const handleEdit = (id) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      setInput(todo.text);
      setEditId(id);
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    if (editId === id) {
      setEditId(null);
      setInput("");
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a to-do"
      />
      <button onClick={handleAddOrUpdate}>
        {editId !== null ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleEdit(todo.id)}>Edit</button>{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
