import React from "react";
import "./App.css";
import TodoApp from "./Components/TodoApp";
import { ModalProvider } from "./Context/Modal.context";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <TodoApp />
      </ModalProvider>
    </div>
  );
}

export default App;
