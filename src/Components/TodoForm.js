import React from "react";
import "../Styles/TodoForm.css";

const TodoForm = () => {
  return (
    <div className="TodoForm">
      <h5 className="TodoForm-heading">Add New Item</h5>
      <textarea className="TodoForm-textarea" />
      <button className="TodoForm-button">Add Item </button>
    </div>
  );
};

export default TodoForm;
