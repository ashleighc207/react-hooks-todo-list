const ItemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return state.filter(i => i.id !== action.id);
    case "EDIT_ITEM":
      return state.map(item => {
        return item.id === action.id
          ? { ...item, description: action.val }
          : item;
      });
    case "MARK_ITEM_COMPLETE":
      return state.map(item => {
        if (item.id === action.id) {
          item.completed = !item.completed;
        }
        return item;
      });
    default:
      return state;
  }
};

export default ItemReducer;
