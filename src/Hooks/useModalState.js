import { useState } from "react";

export default modalStatus => {
  const [modalOpen, setModalOpen] = useState(modalStatus);
  return {
    modalOpen,
    closeModal: () => {
      setModalOpen(false);
    },
    openModal: () => {
      setModalOpen(!modalOpen);
    }
  };
};
