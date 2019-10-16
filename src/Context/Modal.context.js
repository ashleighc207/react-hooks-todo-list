import React, { createContext } from "react";
import useModalState from "../Hooks/useModalState";

export const ModalContext = createContext();

export function ModalProvider(props) {
  const modalItems = useModalState(false);
  return (
    <ModalContext.Provider value={modalItems}>
      {props.children}
    </ModalContext.Provider>
  );
}
