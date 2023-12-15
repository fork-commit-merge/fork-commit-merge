// React - Medium
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // TODO: Add the necessary functionality such as hooks here
  const [todos, settodo]=useState([]);  //contains list of todos
  const [list,addlist] =useState();   //holds the string enterd in inputbox
  const [editopt ,setedit] =useState(false);  //boolean value holds weather or not to show textbox for edit/update
  const [taskToBeEdited, settaskToBeEdited] =useState(); //holds string after editing/updating
  const [indexToBeEdited, setindexToBeEdited]  =useState(); //holds index of string which is edited

  // this will get tasks stored in the local storage
  useEffect(()=>{
    let arr=localStorage.getItem('tasks')
    arr =JSON.parse(arr)
    settodo(arr);
  },[])

  // function t0 delete task
  const deletetask =(index)=>{
    const arr = [...todos.slice(0, index), ...todos.slice(index + 1)]
    setTimeout(()=>{
      settodo(arr);
    },0)
    localStorage.setItem("tasks",JSON.stringify(arr))
    
  }
  

  // function to edit the todo task
  const edit =(index)=>{
    setedit(true);
    setindexToBeEdited(index)
    settaskToBeEdited(todos[index]);
  }

  // function that saves edited task
  const save =()=>{
    const index =indexToBeEdited;
    const arr = todos;
    arr[index]=taskToBeEdited;
    setTimeout(()=>{
      settodo(arr);
    },0)
    localStorage.setItem("tasks",JSON.stringify(todos))
  }

  // function renders the available tasks in the states to table
  const showdata=()=>{
    return todos.map((item,index)=>
        (<tr key={index}>
        <td>{item}</td>
        <td onClick={()=>edit(index)}>Edit</td>
        <td onClick={()=>deletetask(index)}>Delete</td>
      </tr>
       )
    )
    
  }

  // function to render the table
  const showtable=()=>{
    return todos.length>0 ?
    <table>
    <thead>
    <tr>
      <th>Tasks</th><th>Edit</th><th>Delete</th>
    </tr>
    </thead>
    <tbody>
        {
          showdata()
        }
    </tbody>
  </table>
 :<h5 style={{color:"white"}} >Add Tasks</h5>
  }

  // function to create a new todo list task
  const adddata=()=>{
    setTimeout(()=>{
      settodo([ ...todos,list ]);
    },0)
    localStorage.setItem("tasks",JSON.stringify([ ...todos,list ]))
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className='inputdiv'>
        <input type='text' placeholder='task' className='input' onChange={(e)=>addlist(e.target.value)}></input>
        <span className='inputbtn' onClick={()=>{adddata() }}>Add</span>
        {showtable()}
        {
          editopt===true //condition to weather or not to show textbox for edit/update
          ?
                <div style={{marginTop:"20px"}}> 
                <input type='text' value={taskToBeEdited} onChange={(e)=>{settaskToBeEdited(e.target.value)}}></input><span className='editbtn' onClick={()=>{save();setedit(false)}}>Edit</span>  </div>
          : 
            <></>
         }
      </div>
    </div>
  );
}

export default App;
