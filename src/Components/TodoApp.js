import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "../Styles/TodoApp.css";

const TodoApp = () => {
  return (
    <div className="TodoApp">
      <div className="TodoApp-heading">
        <h2 className="TodoApp-title">Things to do</h2>
        <i className="fas fa-plus TodoApp-icon"></i>
      </div>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default TodoApp;
