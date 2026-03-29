import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
  if (!todos.length) {
    return (
      <div className="rounded-xl border border-dashed border-orange-300 bg-orange-50 px-4 py-8 text-center text-sm text-orange-700">
        No to-dos yet. Add one to get started.
      </div>
    );
  }

  return (
    <div className="max-h-80 overflow-y-auto pr-1">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default TodoList;