// React - Medium

import "./App.css";
import { useState , useEffect} from "react";

function App() {
  // TODO: Add the necessary functionality such as hooks here

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addtask() {
    if (task.trim() === "") return;
      const newList = [...list, task];
      setList(newList);

    localStorage.setItem("tasks", JSON.stringify(newList));

    setTask("");
  }

  function removetask(idx){
      const newList = list.filter((_,i) => i != idx);

      setList(newList);
      localStorage.setItem("tasks", JSON.stringify(newList));
  }

  function updatetask(idx){
      if (task.trim() === "") return;

      const newList = [...list];
      newList[idx] = task;

      setList(newList);
      localStorage.setItem("tasks", JSON.stringify(newList));
       setTask("");
  }

  useEffect(() => {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setList(savedTasks);
  },[])

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* TODO: Add the To-Do list here */}
      <input
        placeholder="Add the Task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "16px", margin: "40px" }}
      />

      <button className="button" onClick={() => addtask()}>
        Add Task
      </button>

      <ol>
        {list.map((item, idx) => {
          return (
            <div  style={{ padding: "16px", margin: "16px", display: "flex" }}>
              <li style={{fontSize:"40px"}} key={idx}>{item}</li>
              <button className="button" onClick={() => removetask(idx)}>
                Delete
              </button>
              <button className="button" onClick={() => updatetask(idx)}>
                Update
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
