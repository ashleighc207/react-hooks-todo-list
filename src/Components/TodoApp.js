import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "../Styles/TodoApp.css";

const TodoApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState([]);
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
  const editItem = (id, val) => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.description = val;
      }
      return item;
    });
    setItems(updatedItems);
  };
  const markItemComplete = id => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItems(updatedItems);
  };
  return (
    <div className="TodoApp">
      <div className="TodoApp-heading">
        <h2 className="TodoApp-title">Things to do</h2>
        <i className="fas fa-plus TodoApp-icon" onClick={handleClick}></i>
      </div>
      <TodoList
        items={items}
        markItemComplete={markItemComplete}
        deleteItem={deleteItem}
      />
      {modalOpen && <TodoForm closeModal={closeModal} addItem={addItem} />}
    </div>
  );
};

export default TodoApp;
