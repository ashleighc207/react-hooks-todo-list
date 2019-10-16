import React, { createContext } from "react";
import useItemState from "../Hooks/useItemState";

export const ItemContext = createContext();
const initialItems = JSON.parse(window.localStorage.getItem("items") || []);

export function ItemProvider(props) {
  const itemData = useItemState(initialItems);
  return (
    <ItemContext.Provider value={itemData}>
      {props.children}
    </ItemContext.Provider>
  );
}
