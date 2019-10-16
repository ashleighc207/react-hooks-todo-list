import React, { useEffect, useContext } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "../Styles/TodoApp.css";
import useItemState from "../Hooks/useItemState";
import useModalState from "../Hooks/useModalState";
import { ItemProvider } from "../Context/Item.context";
import { ModalContext } from "../Context/Modal.context";

const TodoApp = () => {
  const { modalOpen, closeModal, openModal } = useContext(ModalContext);
  return (
    <div className="TodoApp">
      <div className="TodoApp-heading">
        <h2 className="TodoApp-title">Things to do</h2>
        <i className="fas fa-plus TodoApp-icon" onClick={openModal}></i>
      </div>
      <ItemProvider>
        <TodoList />
        {modalOpen && <TodoForm closeModal={closeModal} />}
      </ItemProvider>
    </div>
  );
};

export default TodoApp;
