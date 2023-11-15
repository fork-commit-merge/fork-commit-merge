// React - Medium

import './App.css';
import React, { useState } from 'react';


function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addItem() {
    console.log(newItem);

    if (!newItem) {
      alert('Enter an item.');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList,item])

    setNewItem('')
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      <input 
        type='text'
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>Delete</button></li>
          )
        })}
      </ul>
    </div>
    
  );
}

export default App;
