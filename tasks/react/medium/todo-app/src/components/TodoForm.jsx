import PropTypes from "prop-types";

function TodoForm({ value, onChange, onSubmit }) {
  return (
    <form className="mb-6 flex gap-3" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Add a new task"
        className="w-full rounded-lg border border-orange-200 bg-orange-50 px-4 py-2.5 text-sm text-stone-900 placeholder:text-orange-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        aria-label="New todo"
      />
      <button
        type="submit"
        className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
      >
        Add
      </button>
    </form>
  );
}

TodoForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;