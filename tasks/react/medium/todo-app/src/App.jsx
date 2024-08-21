import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State for the task list and new task input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle changes in the new task input field
  const handleNewTaskChange = (e) => setNewTask(e.target.value);

  // Add a new task item
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  // Handle changes in the edit input field
  const handleEditChange = (e) => setEditText(e.target.value);

  // Set the index of the item to be edited
  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  // Update an existing task item
  const handleUpdateTask = () => {
    if (editText.trim() === '') return;
    const updatedTasks = tasks.map((task, index) =>
      index === editIndex ? editText : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText('');
  };

  // Delete a task item
  const handleDeleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      {editIndex !== null && (
        <div>
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            placeholder="Edit task"
          />
          <button onClick={handleUpdateTask}>Update</button>
          <button onClick={() => setEditIndex(null)}>Cancel</button>
        </div>
      )}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;