import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useModalState = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((p) => !p);
  };

  return { showModal, toggleModal };
};

export const useChildren = (childrenIds, parent) => {
  const membersList = useSelector((state) => state.selectList);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    setChildren(
      membersList.filter((member) => childrenIds.includes(member.id))
    );
  }, [childrenIds]);

  return children;
};
