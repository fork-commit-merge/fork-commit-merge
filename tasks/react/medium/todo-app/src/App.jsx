// React - Medium
import { useState , useEffect} from "react";
import "./App.css";
import Items from "./Components/Items";

function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [arr, setArr]=useState([])
  const [title, setTitle]=useState('')
  const [desc, setDesc]=useState('')
  const [item, setItem]=useState({})

  useEffect(()=>{
    setItem({title, desc})
  },[title, desc])
  return (
    <div className="App card">
      <h1>To-Do List</h1>
      {/* TODO: Add the To-Do list here */}
      <div className="box">
        <input type='text' className="pclass" placeholder='Enter Title' value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <input type='text' className="pclass" placeholder='Enter The Description' value={desc} onChange={(e)=>{
          setDesc(e.target.value)
        }}/>
        <button type='button' className="but" onClick={(e)=>{
          setTitle('')
          setDesc('')
          setItem({})
          setArr([...arr,item])
          console.log(arr)
        }}>Add</button>      
      </div>
      <div className="onlyflex">
        {
          arr.map((mal)=>{
            return(
              <Items title={mal.title} desc={mal.desc}/>
            )
          })
        }
      </div>      
    </div>
  );
}

export default App;
