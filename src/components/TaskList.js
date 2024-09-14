import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  const handleDelete = (taskToDelete) => {
    onTaskDelete((prevTasks) => prevTasks.filter(task => task !== taskToDelete));
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;

