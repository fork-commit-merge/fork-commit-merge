import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const STORAGE_KEY = "todo-app-items";
const ITEMS_PER_PAGE = 5;

function normalizeTodo(item) {
  if (!item || typeof item.text !== "string") {
    return null;
  }

  const trimmedText = item.text.trim();

  if (!trimmedText || (typeof item.id !== "string" && typeof item.id !== "number")) {
    return null;
  }

  return {
    id: String(item.id),
    text: trimmedText,
  };
}

function getInitialTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.map(normalizeTodo).filter(Boolean);
  } catch {
    return [];
  }
}

function createTodo(text) {
  const trimmedText = text.trim();

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    text: trimmedText,
  };
}

function App() {
  const [todos, setTodos] = useState(getInitialTodos);
  const [newTodoText, setNewTodoText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const totalPages = Math.max(1, Math.ceil(todos.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleTodos = todos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handleAddTodo = (event) => {
    event.preventDefault();

    const trimmedText = newTodoText.trim();

    if (!trimmedText) {
      return;
    }

    setTodos((previousTodos) => {
      const updatedTodos = [...previousTodos, createTodo(trimmedText)];
      setCurrentPage(Math.max(1, Math.ceil(updatedTodos.length / ITEMS_PER_PAGE)));

      return updatedTodos;
    });
    setNewTodoText("");
  };

  const handleDeleteTodo = (id) => {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id, updatedText) => {
    const trimmedText = updatedText.trim();

    if (!trimmedText) {
      return;
    }

    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, text: trimmedText } : todo,
      ),
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-50 to-rose-100 px-4 py-10 sm:px-6">
      <section className="mx-auto w-full max-w-2xl rounded-2xl border border-orange-200 bg-white/90 p-5 shadow-2xl shadow-orange-200/60 backdrop-blur sm:p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-rose-900 sm:text-4xl">
            To-Do List
          </h1>
          <p className="mt-2 text-sm text-orange-700">
            Add, edit, and remove tasks. Your list is saved automatically.
          </p>
        </header>

        <TodoForm
          value={newTodoText}
          onChange={setNewTodoText}
          onSubmit={handleAddTodo}
        />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodo}
        />

        {todos.length > 0 ? (
          <nav
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
            aria-label="Todo pagination"
          >
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="rounded-md border border-orange-300 px-3 py-1.5 text-sm font-medium text-orange-800 transition hover:border-orange-400 hover:text-orange-900 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isCurrent = currentPage === pageNumber;

              return (
                <button
                  type="button"
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                    isCurrent
                      ? "bg-orange-500 text-white"
                      : "border border-orange-300 text-orange-800 hover:border-orange-400 hover:text-orange-900"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              className="rounded-md border border-orange-300 px-3 py-1.5 text-sm font-medium text-orange-800 transition hover:border-orange-400 hover:text-orange-900 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        ) : null}
      </section>
    </main>
  );
}

export default App;
