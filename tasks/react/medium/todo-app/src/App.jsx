// React - Medium

import { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback(() => {
    if (!newTodo.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
  }, [newTodo]);

  const startEdit = useCallback((todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  }, []);

  const saveEdit = useCallback(() => {
    if (!editingText.trim()) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingId ? { ...todo, text: editingText } : todo
      )
    );

    setEditingId(null);
    setEditingText("");
  }, [editingId, editingText]);

  const cancelEdit = useCallback(() => {
    setEditingId(null);
    setEditingText("");
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleNewKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") addTodo();
    },
    [addTodo]
  );

  const handleEditKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") saveEdit();
      if (e.key === "Escape") cancelEdit();
    },
    [saveEdit, cancelEdit]
  );

  const renderedTodos = useMemo(
    () =>
      todos.map((todo) => (
        <div key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onKeyDown={handleEditKeyDown}
                autoFocus
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={() => startEdit(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </div>
      )),
    [todos, editingId, editingText]
  );

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        value={newTodo}
        placeholder="Enter a todo"
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleNewKeyDown}
      />
      <button onClick={addTodo}>Add</button>

      <div>{renderedTodos}</div>
    </div>
  );
}

export default App;
