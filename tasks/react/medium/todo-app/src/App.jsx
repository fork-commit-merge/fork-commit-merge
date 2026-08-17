import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const handleTodos = () => {
    if (!input.trim()) return;
    setTodos((p) => [...p, { todo: input, id: Date.now() }]);
    setInput("");
  };
  const handleEdit = (index) => {
    const name = prompt("Enter new todo").trim();
    if (name) {
      setTodos((p) => {
        let cpy = [...p];
        cpy[index].todo = name;
        return cpy;
      });
    }
  };
  const handleDelete = (id) => {
    setTodos((p) => p.filter((todo) => todo.id != id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") handleTodos();
        }}
      />
      <button onClick={handleTodos}>ADD</button>
      <ul>
        {todos.map(({ todo, id }, index) => (
          <li key={id} id={id}>
            <span>{todo}</span>
            <button onClick={() => handleEdit(index)}>✏️</button>
            <button onClick={() => handleDelete(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
