import { useState } from "react";

export default modalStatus => {
  console.log(modalStatus);
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
