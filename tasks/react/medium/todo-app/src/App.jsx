// React - Medium

import "./App.css";
import { useEffect, useMemo, useState } from "react";

// A tiny helper to read/write from localStorage safely
const STORAGE_KEY = "todo-app:v1";
const loadTodos = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
const saveTodos = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Failed to save to-dos", e);
  }
};

export default function App() {
  const [todos, setTodos] = useState(() => loadTodos());
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Persist to localStorage whenever todos change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Add
  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, createdAt: Date.now() },
    ]);
    setText("");
  };

  // Start editing
  const startEdit = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  // Update
  const commitEdit = (id) => {
    const trimmed = editingText.trim();
    if (!trimmed) {
      // If emptied during edit, treat as delete
      deleteTodo(id);
      return;
    }
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
    );
    setEditingId(null);
    setEditingText("");
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  // Delete
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    if (editingId === id) cancelEdit();
  };

  // (Optional) simple derived empty state
  const isEmpty = useMemo(() => todos.length === 0, [todos]);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">To-Do</h1>
        <form className="add" onSubmit={addTodo}>
          <input
            className="input"
            placeholder="Add a new task…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="New to-do text"
          />
          <button
            className="btn btn--primary"
            type="submit"
            disabled={!text.trim()}
          >
            Add
          </button>
        </form>
      </header>

      <main className="list">
        {isEmpty ? (
          <div className="empty">No to-dos yet—add your first one above ✨</div>
        ) : (
          todos
            .sort((a, b) => a.createdAt - b.createdAt)
            .map((item) => (
              <div key={item.id} className="item">
                {editingId === item.id ? (
                  <>
                    <input
                      className="input item__input"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") commitEdit(item.id);
                        if (e.key === "Escape") cancelEdit();
                      }}
                      autoFocus
                    />
                    <div className="item__actions">
                      <button
                        className="btn btn--primary"
                        onClick={() => commitEdit(item.id)}
                        aria-label="Save"
                      >
                        Save
                      </button>
                      <button
                        className="btn"
                        onClick={cancelEdit}
                        aria-label="Cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="item__text" title={item.text}>
                      {item.text}
                    </div>
                    <div className="item__actions">
                      <button
                        className="btn"
                        onClick={() => startEdit(item.id, item.text)}
                        aria-label="Edit"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn--danger"
                        onClick={() => deleteTodo(item.id)}
                        aria-label="Delete"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
        )}
      </main>

      <footer className="app__footer">
        <small>
          {todos.length} item{todos.length !== 1 ? "s" : ""}
        </small>
        <button
          className="btn btn--ghost"
          onClick={() => {
            if (todos.length === 0) return;
            const ok = confirm("Clear all to-dos?");
            if (ok) setTodos([]);
          }}
        >
          Clear all
        </button>
      </footer>
    </div>
  );
}
