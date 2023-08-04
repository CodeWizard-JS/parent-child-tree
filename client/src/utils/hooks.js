import { useState } from "react";

export const useModalState = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleCreateModal = () => {
    setShowModal((p) => !p);
  };
  return { showModal, toggleCreateModal };
};
