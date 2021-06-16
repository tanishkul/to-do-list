import React from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import VisibilityFilters from "./components/VisibilityFilter";
import "./style.css";

function App() {
  return (
    <div className="todo-app">
    <h1>ToDo List</h1>
    <AddToDo />
    <ToDoList />
    <VisibilityFilters />
  </div>
  );
}

export default App;
