// React - Medium

import { useState, useEffect } from "react";
import "./App.css";

const textInputStyle = {
  padding: "0.6em 1.2em",
  fontSize: "1em",
  border: "1px solid #646cff",
  borderRadius: "8px",
};

const checkboxStyle = {
  width: "1.6em",
  height: "1.6em",
};

function App() {
  const [todos, setTodos] = useState(() =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const title = e.currentTarget.elements.title.value.trim();
    if (!title) return;
    setTodos([...todos, { id: Date.now(), title, done: false, editing: false }]);
    e.currentTarget.reset();
  };

  const update = (id, changes) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, ...changes } : t)));

  const remove = (id) => setTodos(todos.filter((t) => t.id !== id));

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>To-Do List</h1>
      <form onSubmit={addTodo} style={{ marginBottom: "3em" }}>
        <input
          name="title"
          type="text"
          style={textInputStyle}
          placeholder="What needs doing?"
        />{" "}
        <button type="submit">Add</button>
      </form>

      <div>
        {todos.map((t) => (
          <p key={t.id}>
            <input
              type="checkbox"
              style={checkboxStyle}
              checked={t.done}
              onChange={() => update(t.id, { done: !t.done })}
            />{" "}
            {t.editing ? (
              <>
                <input
                  type="text"
                  style={textInputStyle}
                  value={t.title}
                  autoFocus
                  onChange={(e) => update(t.id, { title: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && update(t.id, { editing: false })}
                />{" "}
                <button onClick={() => update(t.id, { editing: false })}>Save</button>
              </>
            ) : (
              <>
                <span style={{ fontSize: "1.6em" }}>
                  {t.done ? <s>{t.title}</s> : t.title}
                </span>{" "}
                <button onClick={() => update(t.id, { editing: true })}>Edit</button>{" "}
                <button onClick={() => remove(t.id)}>Delete</button>
              </>
            )}
          </p>
        ))}
      </div>
      <p style={{ textAlign: "center" }}>Tasks remaining: {remaining}</p>
    </div>
  );
}

export default App;
