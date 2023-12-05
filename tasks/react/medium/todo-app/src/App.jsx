 
import  { useState, useEffect } from 'react'
import './App.css';
function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [ item, setItem ] = useState( "" )
  const [ todos, setTodos ] = useState(JSON.parse( localStorage.getItem("todos")) ||  [])
  const [ isEditing, setIsEditing ] = useState( false )
  const [editTodo,setEditTodo]=useState("")
  const [ editedId, setEditedId ] = useState()
  
   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
   }, [ todos ] );
  
    function handleFormSubmit(e) {
    e.preventDefault();
    if (item !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: item
        }
      ]);
      }
      setItem("");
  }
  function handleEdit ( id ){
    setIsEditing( prev => !prev )
    setEditedId(id)
    const itemToEdit=todos.find((item)=>item.id===id)
    setEditTodo(itemToEdit.text)
  }
  
  function handleSave ( id ) {
     const editedItem = todos.map( item  => item.id === id ? {...item , text:editTodo} :item  )
    // console.log(editedItem)
    setTodos( editedItem )
    // console.log(todos)
    setEditTodo("")
    setIsEditing(false)
  }


  function handleDelete(id) {
    const updatedtodos = todos.filter( (item) => item.id !== id )
    // console.log(updatedtodos);
    setTodos(updatedtodos)
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={item}
          onChange={(e)=>setItem(e.target.value)}
        />
        <button type="submit">Add new todo</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={ todo.id }>
            {isEditing &&  editedId===todo.id ? <input type="text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}
        /> :<p>{ todo.text }</p>}
            <span>
            {  isEditing &&  editedId===todo.id ?<button onClick={()=>handleSave(todo.id)}>Save</button> :<button onClick={()=>handleEdit(todo.id)}>Edit</button>}
              <button onClick={()=> handleDelete( todo.id ) }>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

