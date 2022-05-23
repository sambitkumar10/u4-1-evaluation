import React, { useState } from "react";
import styles from "./addTask.module.css";
import {v4 as uuid} from "uuid";
import Task from './../Task/Task';
import data from './tasks.json'


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
 console.log(data)
  const [query,setQuery]=useState("")
  const [task,setTask]=useState(data)
  const handleAdd=()=>{
    const payload={
      text:query,
      done:false,
      id:uuid(),
    }
    let newTasks=[...task,payload]
    setTask(newTasks)
    
  }
  const handledelete = (id) => {
    const newdelete=task.filter((item)=>item.id!==id)
    setTask(newdelete)
  }
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={query} placeholder="✎ Add task..." onChange={(e)=>setQuery(e.target.value)}/>
      <button data-cy="add-task-button" onClick={handleAdd}>✚</button>
      
      {task.map((item)=>(
        
          <Task key={item.id} handledelete={handledelete} id={item.id}text={item.text} status={item.done}/>
        
      ))}
    </div>
  );
};

export default AddTask;
