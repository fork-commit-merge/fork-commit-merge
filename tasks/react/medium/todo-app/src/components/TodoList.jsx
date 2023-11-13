import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [selectedForUpdate, setSelectedForUpdate] = useState();

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  const onDeleteClick = (id) => {
    const filteredTodo = todoData?.filter((todo) => todo?.id !== id);
    setTodoData(filteredTodo);
  };

  const onEditClick = (id) => {
    setSelectedForUpdate(todoData?.find((todo) => todo?.id === id));
  };

  return (
    <div>
      TodoList
      {(selectedForUpdate || showTodoForm) && (
        <TodoForm
          todoData={todoData}
          defaultValue={selectedForUpdate}
          setTodoData={setTodoData}
          onCloseClickHandler={() => setShowTodoForm(false)}
          setSelectedForUpdate={setSelectedForUpdate}
        />
      )}
      {todoData?.map((todo) => (
        <TodoCard
          todo={todo}
          key={todo?.id}
          onEditClick={() => onEditClick(todo?.id)}
          onDeleteClick={() => onDeleteClick(todo?.id)}
        />
      ))}
      <button onClick={() => setShowTodoForm(true)} className="add_todo_button">
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
