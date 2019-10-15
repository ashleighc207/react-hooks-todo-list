import React, { useState } from "react";
import "../Styles/TodoForm.css";
import uuid from "uuid/v4";

const TodoForm = props => {
  const [inputVal, setInputVal] = useState("");
  const handleClick = () => {
    let item = { description: inputVal, id: uuid(), completed: false };
    props.addItem(item);
  };
  return (
    <div className="TodoForm">
      <h5 className="TodoForm-heading">Add New Item</h5>
      <textarea
        className="TodoForm-textarea"
        onChange={e => setInputVal(e.target.value)}
      />
      <div className="TodoForm-buttons">
        <button className="TodoForm-button-textonly" onClick={props.closeModal}>
          Cancel
        </button>
        <button className="TodoForm-button" onClick={handleClick}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
