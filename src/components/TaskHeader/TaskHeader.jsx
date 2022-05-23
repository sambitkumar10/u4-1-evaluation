import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>TodoList</h1>
      You have
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      of
      <b data-cy="header-total-task">{totalTask}</b>
      tasks remaining
    </div>
  );
};

export default TaskHeader;
