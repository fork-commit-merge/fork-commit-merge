import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const initialized = useRef(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todo-items")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if (initialized.current) {
      localStorage.setItem("todo-items", JSON.stringify(todos));
    } else {
      initialized.current = true;
    }
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleStartEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const handleSaveEdit = () => {
    if (!editingText.trim()) return;

    setTodos(
      todos.map(todo =>
        todo.id === editingId ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                <span style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  margin: '0 10px'
                }}>
                  {todo.text}
                </span>
                <button onClick={() => handleStartEditing(todo)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;