import React, { useState } from "react";
import Counter from "../Counter/Counter";

import styles from './task.module.css';
const Task = ({id,text,handledelete,status}) => {
  const[isComplete,setIsComplete]=useState(status)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <div><input type="checkbox" data-cy="task-checkbox" checked={isComplete} onChange={(e)=>setIsComplete(e.target.checked)}/></div>
      
      <div data-cy="task-text"><p className={isComplete?styles.striked : ""}>{text}</p></div>
      {/* Counter here */}
      
     <div> <Counter /></div>
      <div><button data-cy="task-remove-button" onClick={()=>handledelete(id)}>✘</button></div>
    </li>
  );
};

export default Task;
