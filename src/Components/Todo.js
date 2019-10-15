import React from "react";
import "../Styles/Todo.css";

const Todo = props => {
  return (
    <div className="Todo">
      <p className="Todo-description">{props.item.description}</p>
      <i
        className="fas fa-times Todo-icon"
        onClick={() => props.deleteItem(props.item.id)}
      ></i>
    </div>
  );
};

export default Todo;
