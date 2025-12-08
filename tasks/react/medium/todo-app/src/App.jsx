// React - Medium

import { useState } from "react";
import "./App.css";

function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);

  function addTask() {
    const currentTask = {
      id: Date.now(),
      name: text,
      completed: false
    };

    setTask([...task, currentTask]);
    setText('');
  }

  function deleteTask(id) {
    setTask(task.filter(task => task.id !== id));
  }

  function completed (id) {
    setTask(task.map(task => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )))
  }


  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* TODO: Add the To-Do list here */}
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={() => addTask()}>Add Task</button>

      <ul>
        {task.map(task => (
          <li 
            key={task.id}
            style={{textDecoration: task.completed ? "line-through" : "none"}}>
            {task.name}
            <button onClick={() => {deleteTask(task.id)}}>Delete Task</button>
            <button onClick={() => {completed(task.id)}}>{task.completed ? "Completed" : "Incomplete"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
