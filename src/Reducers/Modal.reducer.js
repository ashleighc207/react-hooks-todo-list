const ModalReducer = (state, action) => {
  switch (action.type) {
    case "CLOSE_MODAL":
      return () => {
        setModalOpen(false);
      };
    case "OPEN_MODAL":
      return () => {
        setModalOpen(!modalOpen);
      };
  }
};

export default ModalReducer;
