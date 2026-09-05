import React from "react";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1> Task Manager</h1>
      <SearchBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;