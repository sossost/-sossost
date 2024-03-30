import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

export const useModal = () => {
  const modal = useContext(ModalContext);
  if (!modal) throw new Error("Need to register ModalProvider");
  return modal;
};
