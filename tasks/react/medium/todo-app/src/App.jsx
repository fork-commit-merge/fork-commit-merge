// React - Medium

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(()=>{
    const savedList = localStorage.getItem('list');
    return savedList ? JSON.parse(savedList) : [];
  });
  const [updateNum, setUpdateNum] = useState(-1);
  const [updateInput, setUpdateInput] = useState("");
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  },[list]);

  function handleAdd(){
    setList(prev => [...prev, input]);
    setInput("");
  }

  function handleUpdate(e,i,val){
    if(updateNum === i)
      {
        updateList(updateInput,updateNum);
        setUpdateNum(-1);
        setUpdateInput("");
      }
    else{
      setUpdateNum(i);
      setUpdateInput(val);
    }
  }

  function updateList(value, ind){
    setList(prev=>prev.map((val,i)=> i === ind ? value : val))
  }

  function handleDelete(ind){
    setList(prev => prev.filter((v,i)=> i !== ind ? true : false))
  }

  function handleCancel(){
    setUpdateNum(-1);
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ul>
        {
          list.map((val, i)=>(
            <li key={i}>
            {i === updateNum ? <input value={updateInput} onChange={(e)=>{setUpdateInput(e.target.value)}}></input> : val}
            <button onClick={(e)=>handleUpdate(e,i,val)}>Update</button>
            {updateNum === i ? <button onClick={handleCancel}>Cancel</button> : ""}
            <button onClick={(e)=>handleDelete(i)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <input value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
