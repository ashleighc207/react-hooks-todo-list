import React from "react";
import "../Styles/Todo.css";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Todo = props => {
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
  props.item.completed ? (complete = "complete") : (complete = "");
  return (
    <div className="Todo">
      <div className="Todo-check">
        <BlueCheckbox
          checked={props.item.completed}
          onClick={() => props.markItemComplete(props.item.id)}
        />
        <p className={`Todo-description ${complete}`}>
          {props.item.description}
        </p>
      </div>
      <div>
        <EditIcon />
        <DeleteIcon
          onClick={() => props.deleteItem(props.item.id)}
          className="Todo-icon"
        />
      </div>
    </div>
  );
};

export default Todo;
