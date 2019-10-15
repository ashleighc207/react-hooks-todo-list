import React from "react";
import Todo from "./Todo";
import "../Styles/TodoList.css";

const TodoList = () => {
  return (
    <div className="TodoList">
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default TodoList;
