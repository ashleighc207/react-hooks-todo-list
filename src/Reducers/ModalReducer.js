function ModalReducer(state, action) {
  switch (action.type) {
    case closeModal:
      () => {
        setModalOpen(false);
      };
    case openModal:
      () => {
        setModalOpen(!modalOpen);
      };
  }
}

export default ModalReducer;
