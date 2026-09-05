import React from "react";
import { useTaskContext } from "../TaskContexts";   // ✅ plural

const TaskList = () => {
  const { tasks, toggleComplete } = useTaskContext();

  if (tasks.length === 0) return <p className="empty">No tasks found.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
          <span className="task-name">{task.name}</span>
          <button onClick={() => toggleComplete(task.id)}>
            {task.completed ? "✅" : "⬜"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;