import { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";

function useModal() {
  return useContext(ModalContext);
}

export default useModal;
