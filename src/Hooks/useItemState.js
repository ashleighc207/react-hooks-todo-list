import { useState } from "react";

export default initialItems => {
  const [items, setItems] = useState(initialItems);

  return {
    items,
    addItem: item => {
      setItems(prevItems => {
        return [...prevItems, item];
      });
    },
    deleteItem: id => {
      setItems(items.filter(i => i.id !== id));
    },
    editItem: (id, val) => {
      let updatedItems = items.map(item => {
        return item.id === id ? { ...item, description: val } : item;
      });
      setItems(updatedItems);
    },
    markItemComplete: id => {
      let updatedItems = items.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      setItems(updatedItems);
    }
  };
};
