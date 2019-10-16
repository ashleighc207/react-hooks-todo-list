import React, { useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "../Styles/TodoApp.css";
import useItemState from "../Hooks/useItemState";
import useModalState from "../Hooks/useModalState";

const TodoApp = () => {
  const initialItems = JSON.parse(window.localStorage.getItem("items") || []);
  const {
    items,
    addItem,
    deleteItem,
    editItem,
    markItemComplete
  } = useItemState(initialItems);

  const { modalOpen, closeModal, openModal } = useModalState(false);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div className="TodoApp">
      <div className="TodoApp-heading">
        <h2 className="TodoApp-title">Things to do</h2>
        <i className="fas fa-plus TodoApp-icon" onClick={openModal}></i>
      </div>
      <TodoList
        items={items}
        markItemComplete={markItemComplete}
        deleteItem={deleteItem}
        editItem={editItem}
      />
      {modalOpen && <TodoForm closeModal={closeModal} addItem={addItem} />}
    </div>
  );
};

export default TodoApp;
