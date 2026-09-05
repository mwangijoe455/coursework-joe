import { useRef, useEffect } from "react";
import { useTaskContext } from "../TaskContexts";   

const TaskForm = () => {
  const { addTask } = useTaskContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value.trim();
    if (name) {
      addTask(name);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        ref={inputRef}
        placeholder="Add a new task..."
        aria-label="New task name"
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default TaskForm;