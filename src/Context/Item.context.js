import React, { createContext, useReducer } from "react";
import useItemState from "../Hooks/useItemState";
import ItemReducer from "../Reducers/Item.reducer";

export const ItemContext = createContext();
const initialItems = JSON.parse(window.localStorage.getItem("items") || []);

export function ItemProvider(props) {
  const [items, dispatch] = useReducer(ItemReducer, initialItems);
  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
}
