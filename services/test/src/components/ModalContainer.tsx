import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useModal } from "../hooks/useModal";

const MODAL_ID = "modal-container";

const ModalContainer = () => {
  const { top: topComponentInfo } = useModal();

  useEffect(() => {
    console.log(document.getElementById(MODAL_ID));
    if (document.getElementById(MODAL_ID)) return;
    const modalDOM = document.createElement("div");
    modalDOM.id = MODAL_ID;
    document.body.append(modalDOM);
  }, []);

  if (!topComponentInfo) return <></>;

  return ReactDOM.createPortal(
    <div>
      <topComponentInfo.Component
        resolve={topComponentInfo.resolve}
        reject={topComponentInfo.reject}
        {...(topComponentInfo.props ?? {})}
      />
    </div>,
    document.getElementById(MODAL_ID),
  );
};

export default ModalContainer;
