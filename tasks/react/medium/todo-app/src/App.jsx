// React - Medium
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Load data from localStorage on component mount
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever todos change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editingId !== null) {
        // Update existing todo
        const updatedTodos = todos.map((todo) => {
          if (todo.id === editingId) {
            return { id: editingId, text: newTodo };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setNewTodo('');
        setEditingId(null);
      } else {
        // Add a new todo
        const newTodos = [...todos, { id: Date.now(), text: newTodo }];
        setTodos(newTodos);
        setNewTodo('');
      }
    }
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setNewTodo(todoToEdit.text);
      setEditingId(id);
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


 return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new To-Do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>
        {editingId !== null ? 'Update To-Do' : 'Add To-Do'}
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
