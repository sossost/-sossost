"use client";

import { createContext, useCallback, useState } from "react";
import ModalContainer from "../components/ModalContainer";

type ModalContextType = {
  push: (key: string, Component: any, props: any) => Promise<any>;
  pop: () => void;
  clear: () => void;
  top: any;
  modalInfos: any[];
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }) => {
  const [modalInfos, setModalInfos] = useState<any[]>([]);
  const [flag, setFlag] = useState(0);

  const flush = useCallback(() => {
    setFlag((prev) => prev + 1);
  }, []);

  const handlePromise = useCallback(
    (key, resolver, value) => {
      resolver(value);
      setModalInfos((infos) => infos.filter((info) => info.key !== key));
      flush();
    },
    [flush],
  );

  const push = useCallback(
    async (key, Component, props) => {
      return new Promise((resolve, reject) => {
        setModalInfos((infos) => [
          ...infos,
          {
            key,
            Component,
            props,
            resolve: (value) => handlePromise(key, resolve, value),
            reject: (reason) => handlePromise(key, reject, reason),
          },
        ]);
        flush();
      });
    },
    [handlePromise, flush],
  );

  const pop = useCallback(() => {
    const topInfo = modalInfos[modalInfos.length - 1];
    if (!topInfo) return;

    topInfo.reject(`Close modal: ${topInfo.key}`);
    setModalInfos((infos) => infos.slice(0, infos.length - 1));
    flush();
  }, [modalInfos, flush]);

  const clear = useCallback(() => {
    while (modalInfos.length > 0) {
      pop();
    }
  }, [modalInfos, pop]);

  const top = modalInfos[modalInfos.length - 1];

  return (
    <ModalContext.Provider value={{ push, pop, clear, top, modalInfos }}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
};
