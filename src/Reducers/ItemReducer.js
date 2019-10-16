function ItemReducer(action, state) {
  switch (action.type) {
    case addItem:
      item => {
        setItems(prevItems => {
          return [...prevItems, item];
        });
      };
    case deleteItem:
      id => {
        setItems(items.filter(i => i.id !== id));
      };
    case editItem:
      (id, val) => {
        let updatedItems = items.map(item => {
          return item.id === id ? { ...item, description: val } : item;
        });
        setItems(updatedItems);
      };
    case markItemComplete:
      id => {
        let updatedItems = items.map(item => {
          if (item.id === id) {
            item.completed = !item.completed;
          }
          return item;
        });
        setItems(updatedItems);
      };
  }
}

export default ItemReducer;
