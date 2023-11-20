"use client";
import { WidthType } from "@/functions/types/Common";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";

type ModalProps = {
  close: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  width?: WidthType;
};

export const Modal = ({
  close,
  isOpen,
  children,
  width = "auto",
}: ModalProps) => {
  // NOTE:最低限の背景固定ロジック
  const stopScrollingBackContent = () => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(stopScrollingBackContent, [isOpen]);

  return isOpen ? (
    <div className={styles["modal-overlay"]} onClick={close} aria-hidden="true">
      <div className={styles["modal-content"]} data-width={width}>
        {children}
      </div>
    </div>
  ) : null;
};
