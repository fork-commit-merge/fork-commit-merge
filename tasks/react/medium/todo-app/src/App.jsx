// React - Medium

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [currItem, setCurrItem] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newItem = {
      id,
      text: currItem,
    };
    setItems((items) => {
      return [...items, newItem];
    });
    setCurrItem("");
    console.log(items);
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleEdit(id, text) {
    setEditId(id);
    setEditText(text);
  }

  function handleSave() {
    setItems(
      items.map((item) =>
        item.id === editId ? { ...item, text: editText } : item
      )
    );
    setEditId(null);
    setEditText("");
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currItem}
          onChange={(e) => setCurrItem(e.target.value)}
        />
        <button>Add</button>
      </form>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {editId === item.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <button onClick={() => handleEdit(item.id, item.text)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
