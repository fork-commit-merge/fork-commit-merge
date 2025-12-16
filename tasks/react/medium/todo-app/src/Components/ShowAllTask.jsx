function ShowAllTask({ task, taskDeleat, editTask, editIndex }) {
  return (
    <div>
      {task.map((item, idx) => {
        return (
          <div key={idx}>
            <span>{item} </span>

            <button onClick={() => editTask(idx)}>
              {editIndex == idx ? "Update" : "Edit"}
            </button>
            <button onClick={() => taskDeleat(idx)}>Deleat</button>
          </div>
        );
      })}
    </div>
  );
}

export default ShowAllTask;
