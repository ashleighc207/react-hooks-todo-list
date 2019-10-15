import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "../Styles/TodoApp.css";

const TodoApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState("");
  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const addItem = item => {
    setItems(prevItems => {
      return [...prevItems, item];
    });
    setModalOpen(false);
  };
  const deleteItem = id => {
    setItems(items.filter(i => i.id !== id));
  };
  return (
    <div className="TodoApp">
      <div className="TodoApp-heading">
        <h2 className="TodoApp-title">Things to do</h2>
        <i className="fas fa-plus TodoApp-icon" onClick={handleClick}></i>
      </div>
      <TodoList items={items} deleteItem={deleteItem} />
      {modalOpen && <TodoForm closeModal={closeModal} addItem={addItem} />}
    </div>
  );
};

export default TodoApp;
