import React from "react";
import "../Styles/Todo.css";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";

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
      <>
        <BlueCheckbox
          checked={props.item.completed}
          onClick={() => props.markItemComplete(props.item.id)}
        />
        <p className={`Todo-description ${complete}`}>
          {props.item.description}
        </p>
      </>
      <i
        className="fas fa-times Todo-icon"
        onClick={() => props.deleteItem(props.item.id)}
      ></i>
    </div>
  );
};

export default Todo;
