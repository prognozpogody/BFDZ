import style from "./modal.module.css";
import { ReactNode } from "react";
import React from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
  isOpen: boolean;
}

function ModalContent({ children }: { children: ReactNode }) {
  return <div className={style.modal_content}>{children}</div>;
}

export const ModalPortal = function ({
  children,
  isOpen = false,
}: ModalPortalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={style.modal_wrapper}>
      <ModalContent>{children}</ModalContent>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};
