import { useState } from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(todo.text);

  const handleStartEdit = () => {
    setDraftText(todo.text);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setDraftText(todo.text);
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const trimmedText = draftText.trim();

    if (!trimmedText) {
      return;
    }

    onUpdateTodo(todo.id, trimmedText);
    setIsEditing(false);
  };

  return (
    <li className="rounded-xl border border-orange-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {isEditing ? (
          <input
            type="text"
            value={draftText}
            onChange={(event) => setDraftText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSaveEdit();
              }

              if (event.key === "Escape") {
                handleCancelEdit();
              }
            }}
            className="w-full rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-stone-900 placeholder:text-orange-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            aria-label="Edit todo"
          />
        ) : (
          <p className="break-words text-sm text-stone-900 sm:text-base">{todo.text}</p>
        )}

        <div className="flex shrink-0 items-center gap-2">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={handleSaveEdit}
                className="rounded-md bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="rounded-md border border-orange-300 px-3 py-1.5 text-xs font-semibold text-orange-800 transition hover:border-orange-400 hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleStartEdit}
                className="rounded-md border border-teal-600 px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:border-teal-700 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => onDeleteTodo(todo.id)}
                className="rounded-md bg-rose-600 px-3 py-1.5 text-xs font-semibold text-rose-50 transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default TodoItem;