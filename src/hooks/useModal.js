import { useCallback, useState } from "react";


function useModal () {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const onOpen = useCallback(() => {
    setIsModalOpen(true);
  },[setIsModalOpen]);

  const onClose = useCallback(() => {
    setIsModalOpen(false);
  },[setIsModalOpen]);

  return { isModalOpen, onOpen, onClose };
};

export default useModal;
