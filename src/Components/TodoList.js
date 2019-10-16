import React, { useContext } from "react";
import Todo from "./Todo";
import "../Styles/TodoList.css";
import { ItemContext } from "../Context/Item.context";

const TodoList = props => {
  const { items } = useContext(ItemContext);

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
