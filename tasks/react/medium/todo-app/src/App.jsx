// React - Medium

import "./App.css";
import { useState, useEffect } from 'react';

function App() {
const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null); // 編集中のタスクID
  const [editInput, setEditInput] = useState('');   // 編集中のテキスト

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, id: Date.now(), completed: false }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditInput(text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editInput } : todo
      )
    );
    setEditingId(null);
    setEditInput('');
  };
  ;
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="新しいタスク"
      />
      <button onClick={addTodo}>追加</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleComplete(todo.id)} 
            />

            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>保存</button>
                <button onClick={() => setEditingId(null)}>キャンセル</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => startEdit(todo.id, todo.text)}>編集</button>
              </>
            )}

            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;
