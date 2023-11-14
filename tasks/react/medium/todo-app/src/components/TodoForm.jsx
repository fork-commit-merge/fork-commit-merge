import { useState } from "react";

const TodoForm = ({
  onCloseClickHandler = () => {},
  setTodoData = () => {},
  defaultValue = {},
  todoData = [],
  setSelectedForUpdate = () => {},
}) => {
  const [todoDataValue, setTodoDataValue] = useState({
    title: defaultValue?.title || "",
  });

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 101);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (defaultValue?.title) {
            const newUpdatedTodoData = [...todoData];
            const indexOfItemThatIsBeingUpdated = newUpdatedTodoData?.findIndex(
              (todo) => todo.id === defaultValue?.id
            );

            newUpdatedTodoData[indexOfItemThatIsBeingUpdated].title =
              todoDataValue.title;
            setTodoData(newUpdatedTodoData);
            setSelectedForUpdate();
          } else {
            setTodoData((prevValue) => [
              ...prevValue,
              {
                title: todoDataValue.title,
                id: getRandomNumber(),
              },
            ]);
          }

          onCloseClickHandler();
        }}
      >
        <input
          value={todoDataValue.title}
          onChange={(e) => setTodoDataValue({ title: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
