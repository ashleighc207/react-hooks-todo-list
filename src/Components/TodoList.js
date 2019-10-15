import React from "react";
import Todo from "./Todo";
import "../Styles/TodoList.css";

const TodoList = props => {
  const handleDelete = id => {
    props.deleteItem(id);
  };
  return (
    <div className="TodoList">
      {props.items.length > 0 &&
        props.items.map(item => {
          return <Todo item={item} deleteItem={handleDelete} key={item.id} />;
        })}
    </div>
  );
};

export default TodoList;
