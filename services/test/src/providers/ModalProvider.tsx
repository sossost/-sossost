"use client";

import { createContext, useState } from "react";
import ModalController from "../controller/ModalController";
import ModalContainer from "../components/ModalContainer";

export const ModalContext = createContext<ModalController | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const flagState = useState(1);
  const [modalController] = useState(() => new ModalController(flagState));

  return (
    <ModalContext.Provider value={modalController}>
      <>{children}</>
      <ModalContainer />
    </ModalContext.Provider>
  );
}
