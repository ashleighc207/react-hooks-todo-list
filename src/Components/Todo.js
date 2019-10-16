import React, { useContext } from "react";
import "../Styles/Todo.css";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import useToggleState from "../Hooks/useToggleState";
import useInputState from "../Hooks/useInputState";
import { ItemContext } from "../Context/Item.context";

const Todo = ({ id, description, completed }) => {
  const { dispatch } = useContext(ItemContext);
  const [isEditing, toggleIsEditing] = useToggleState();
  const [inputVal, handleInputChange, reset] = useInputState(description);
  const handleClick = () => {
    dispatch({ type: "EDIT_ITEM", id: id, val: inputVal });
    toggleIsEditing();
  };
  const BlueCheckbox = withStyles({
    root: {
      color: "rgba(54, 92, 123, 0.8)",
      "&$checked": {
        color: "rgba(54, 92, 123, 0.95)"
      }
    },
    checked: {}
  })(props => <Checkbox color="default" {...props} />);
  let complete;
  completed ? (complete = "complete") : (complete = "");
  return (
    <div className="Todo">
      {isEditing ? (
        <div className="Todo-edit-form">
          <input
            type="text"
            value={inputVal}
            onChange={handleInputChange}
            className="Todo-edit-form-input"
          />
          <div className="Todo-edit-form-icons">
            <CheckIcon className="Todo-edit-form-icon" onClick={handleClick} />
            <CancelIcon
              onClick={toggleIsEditing}
              className="Todo-edit-form-icon"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="Todo-check">
            <BlueCheckbox
              checked={completed}
              onClick={() => dispatch({ type: "MARK_ITEM_COMPLETE", id: id })}
            />
            <p className={`Todo-description ${complete}`}>{description}</p>
          </div>
          <div>
            <EditIcon onClick={toggleIsEditing} className="Todo-icon" />
            <DeleteIcon
              onClick={() => dispatch({ type: "DELETE_ITEM", id: id })}
              className="Todo-icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
