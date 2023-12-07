// React - Medium
import { useState, useEffect } from 'react'
import './App.css';


function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [items, setItems ] = useState(
    JSON.parse(localStorage.getItem('fork-commit-merge')) || 
    {}
  )

  const addItem = text => {
    if (text.split('').every(x => x == ' ')) return
    let id = Date.now()

    setItems(prev => ({ ...prev, [id]: text }))
  },
  enterAdd = e => {
    let { key, target } = e
    if (key != 'Enter') return
    e.preventDefault()

    addItem(target.value)
    target.value = ''
  },
  clickAdd = e => {
    let target = document.getElementById('add')
    e.preventDefault()

    addItem(target.value)
    target.value = ''    
  }

  const updateItem = (id, str) =>
    setItems(prev => ({ ...prev, [id]: str }))

  const deleteItem = id =>
    setItems(prev => 
      Object.keys(prev).filter(key => key != id)
      .reduce((obj, key) => ({ ...obj, [key]: prev[key] }), {})
  )

  useEffect(() => {
    localStorage.setItem('fork-commit-merge', JSON.stringify(items))
  }, [Object.values(items).join(', ')])

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <textarea id="add" rows="1"
        style={{position: 'relative', right: 5}}
        onKeyDown={enterAdd}
      />
      <button onClick={clickAdd}>Enter</button>
      <hr/>
      {Object.entries(items).map(([id, text]) =>
      <>
        <Todo id={id}
          ud={updateItem}
          del={deleteItem}
        >
          {text}
        </Todo>
        <hr/>
      </>
      )}
      {
      Object.keys(items).length > 1 && (
        <button onClick={() => setItems({})}>Delete All</button>
      )}
    </div>
  );
}

const Todo = ({ id, ud, del, children}) => {
  const [editing, edit] = useState(false)

  return (
  <div key={id}  style={{textAlign: 'left'}}>
    <div style={{textAlign: 'right'}}>
      <button onClick={() => edit(!editing)}>{editing ? 'Enter' : 'Edit'}</button>
      <button onClick={() => del(id)}>X</button>
    </div>
    {
      editing ? (
      <textarea defaultValue={children} rows='1' style={{width: '97%'}}
        onChange={({ target }) => 
          ud(id, target.value)
      }
        onKeyDown={({ key }) => key == 'Enter' && edit(false) }
      />
      ) : (
      <span>
        {children}
      </span>
      )
    }
  </div>
)}

export default App;
