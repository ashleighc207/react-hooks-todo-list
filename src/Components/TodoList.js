import React from "react";
import Todo from "./Todo";
import "../Styles/TodoList.css";

const TodoList = props => {
  const handleDelete = id => {
    props.deleteItem(id);
  };
  const handleComplete = id => {
    props.markItemComplete(id);
  };

  const handleEdit = (id, val) => {
    props.editItem(id, val);
  };
  return (
    <div className="TodoList">
      {props.items.length > 0 &&
        props.items.map(item => {
          return (
            <Todo
              item={item}
              markItemComplete={handleComplete}
              deleteItem={handleDelete}
              editItem={handleEdit}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
