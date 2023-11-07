import  { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    if (editingIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = newTodo;
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }
    setNewTodo('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditingIndex(index);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="todos">
        <div className="todo">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo}>{editingIndex !== null ? 'Edit' : 'Add'}</button>
        </div>
        {todos.map((todo, index) => (
          <div className="todo" key={index}>
            <span className='txt'>{todo}</span>
            <span>
              <span className='tool delete' onClick={() => deleteTodo(index)}>Delete</span>
              <span className='tool edit ' onClick={() => editTodo(index)}>Edit</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
