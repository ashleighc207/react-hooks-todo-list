import React, { useContext } from "react";
import Todo from "./Todo";
import "../Styles/TodoList.css";
import { ItemContext } from "../Context/Item.context";

const TodoList = props => {
  const { items, markItemComplete, deleteItem, editItem } = useContext(
    ItemContext
  );
  const handleDelete = id => {
    deleteItem(id);
  };
  const handleComplete = id => {
    markItemComplete(id);
  };

  const handleEdit = (id, val) => {
    editItem(id, val);
  };
  return (
    <div className="TodoList">
      {items.length > 0 &&
        items.map(item => {
          return (
            <Todo
              id={item.id}
              completed={item.completed}
              description={item.description}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
