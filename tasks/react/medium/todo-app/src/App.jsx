// React - Medium

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // `todos` stores the list of todo objects: { id, text }
  const [todos, setTodos] = useState([]);

  // `input` is the current value of the text input
  const [input, setInput] = useState("");

  // `editingId` holds the id of the todo being edited (null when adding)
  const [editingId, setEditingId] = useState(null);

  // Load todos from localStorage once when the app starts
  useEffect(() => {
    try {
      const stored = localStorage.getItem("todos");
      if (stored) setTodos(JSON.parse(stored));
    } catch (e) {
      // If parsing fails, start with an empty list
      setTodos([]);
    }
  }, []);

  // Save todos to localStorage whenever `todos` changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Handle input change
  function handleChange(e) {
    setInput(e.target.value);
  }

  // Add a new todo or update an existing one
  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return; // Prevent adding empty todos

    if (editingId !== null) {
      // Update existing todo
      setTodos((prev) =>
        prev.map((t) => (t.id === editingId ? { ...t, text } : t))
      );
      setEditingId(null);
    } else {
      // Add new todo with a unique id
      const newTodo = { id: Date.now(), text };
      setTodos((prev) => [newTodo, ...prev]);
    }

    // Clear input after adding or updating
    setInput("");
  }

  // Start editing a todo: populate input and set editingId
  function handleEdit(id) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    setInput(todo.text);
    setEditingId(id);
  }

  // Delete a todo by id
  function handleDelete(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    // If the deleted todo was being edited, reset the input
    if (editingId === id) {
      setEditingId(null);
      setInput("");
    }
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setInput("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <ul>
        {todos.length === 0 && <li>No todos yet.</li>}
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
