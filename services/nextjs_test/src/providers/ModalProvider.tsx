"use client";

import { ReactNode, createContext, useCallback, useState } from "react";
import ModalContainer from "../components/ModalContainer";

type ModalContextType = {
  push: (
    key: string,
    Component: React.ComponentType<any>,
    props: any,
  ) => Promise<any>;
  pop: () => void;
  clear: () => void;
  top: ModalInfo | undefined;
};

type ModalInfo = {
  key: string;
  Component: React.ComponentType<any>;
  props: any;
  resolve: (value: any) => void;
  reject: (reason: any) => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalInfos, setModalInfos] = useState<ModalInfo[]>([]);

  const handlePromise = (
    key: string,
    resolver: (value: unknown) => void,
    value: unknown,
  ) => {
    resolver(value);
    setModalInfos((infos) => infos.filter((info) => info.key !== key));
  };

  const push = async (
    key: string,
    Component: React.ComponentType<any>,
    props: any,
  ) => {
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
    });
  };

  const pop = () => {
    const topInfo = modalInfos[modalInfos.length - 1];
    if (!topInfo) return;

    topInfo.reject(`Close modal: ${topInfo.key}`);
    setModalInfos((infos) => infos.slice(0, infos.length - 1));
  };

  const clear = () => {
    while (modalInfos.length > 0) {
      pop();
    }
  };

  const top = modalInfos[modalInfos.length - 1];

  return (
    <ModalContext.Provider value={{ push, pop, clear, top }}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
};
