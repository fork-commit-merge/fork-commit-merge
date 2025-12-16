import { useEffect, useState } from "react";
import ShowAllTask from "./ShowAllTask";

function AddTask() {
  const [taskValue, setTaskValue] = useState("");
  const [task, setTask] = useState(() => {
    const saveTask = localStorage.getItem("task");
    return saveTask ? JSON.parse(saveTask) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  const onChange = (e) => {
    setTaskValue(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    if (!taskValue) {
      alert("Plase Task Add");
      return;
    }

    if (task.includes(taskValue) && editIndex == null) {
      alert("Task already exists");
      return;
    }

    if (editIndex !== null) {
      const updateTask = [...task];
      updateTask[editIndex] = taskValue;
      setTask(updateTask);
      setEditIndex(null);
    } else {
      setTask([...task, taskValue]);
    }

    setTaskValue("");
  };

  const taskDeleat = (idx) => {
    const updateTask = task.filter((_, id) => id != idx);
    setTask(updateTask);
  };

  const editTask = (idx) => {
    setTaskValue(task[idx]);
    setEditIndex(idx);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          placeholder="Enter task..."
          onChange={onChange}
          value={taskValue}
        ></input>
        <button>Add</button>
      </form>

      <ShowAllTask
        task={task}
        taskDeleat={taskDeleat}
        editTask={editTask}
        editIndex={editIndex}
      />
    </div>
  );
}

export default AddTask;
