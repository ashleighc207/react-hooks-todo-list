import React from "react";
import "../Styles/TodoForm.css";
import uuid from "uuid/v4";
import useInputState from "../Hooks/useInputState";

const TodoForm = props => {
  const [inputVal, handleValChange, reset] = useInputState("");

  const handleClick = () => {
    let item = { description: inputVal, id: uuid(), completed: false };
    props.addItem(item);
    props.closeModal();
    reset();
  };
  return (
    <div className="TodoForm">
      <h5 className="TodoForm-heading">Add New Item</h5>
      <textarea
        className="TodoForm-textarea"
        value={inputVal}
        onChange={handleValChange}
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
