"use client";
import { StackPosition } from "@/functions/types/Common";
import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useOuterClick } from "../../../functions/hooks/useOuterClick";
import styles from "./styles.module.scss";

type ListProps = {
  id?: string;
  onClose: () => void;
  open: boolean;
  position?: StackPosition;
  triggerRef: React.RefObject<HTMLButtonElement>;
  children: React.ReactNode;
};

export const BLOCK_NAME = "spui-DropdownMenu";
const FADE_IN_ANIMATION = "spui-DropdownMenu-fade-in";

const MENU_WIDTH = 256;

const menuElStyle = styles[`${BLOCK_NAME}-menu`];

const List = ({
  children,
  id,
  onClose,
  open,
  position = "bottomCenter",
  triggerRef,
}: ListProps) => {
  const menuEl = useRef<HTMLUListElement>(null);

  const [fadeOut, setFadeOut] = useState(false);
  const [triggerHeight, setTriggerHeight] = useState(0);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);

  useOuterClick([menuEl, triggerRef], () => {
    if (!open) return;
    setFadeOut(true);
  });

  const handleInnerClick = useCallback(() => {
    setFadeOut(true);
  }, [setFadeOut]);

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent) => {
      if (event.animationName.includes(FADE_IN_ANIMATION)) return;

      onClose();
      setFadeOut(false);
    },
    [onClose, setFadeOut]
  );

  useEffect(() => {
    const menu = menuEl.current;
    menu?.addEventListener("animationend", handleAnimationEnd, false);

    return () =>
      menu?.removeEventListener("animationend", handleAnimationEnd, false);
  }, [menuEl, handleAnimationEnd]);

  // Triggerの縦横幅を取得
  useEffect(() => {
    if (!triggerRef.current) return;

    const { height, width } = triggerRef.current.getBoundingClientRect();
    setTriggerHeight(height);
    setTriggerWidth(width);
  }, [triggerRef]);

  // Menuの縦幅を取得
  useEffect(() => {
    if (!open) return;
    if (!menuEl.current) return;

    const { height } = menuEl.current.getBoundingClientRect();
    setMenuHeight(height);
  }, [open]);

  if (!open) return <></>;

  let top = "70px";
  // let bottom;
  let left;
  // let right = "10px";

  console.log(triggerHeight, "triggerHeight");
  console.log(triggerWidth, "triggerWidth");
  // console.log(menuHeight, "menuHeight");

  // if (["topLeft", "topCenter", "topRight"].includes(position)) {
  //   bottom = `${triggerHeight}px`;
  // }
  if (["topCenter", "bottomCenter"].includes(position)) {
    left = `-${(MENU_WIDTH - triggerWidth) / 2}px`;
  }
  // if (["rightCenter", "leftCenter"].includes(position)) {
  //   top = `-${(menuHeight - triggerHeight) / 2}px`;
  // }
  if (["bottomLeft", "bottomCenter", "bottomRight"].includes(position)) {
    top = `${triggerHeight}px`;
  }

  console.log(triggerHeight, "triggerHeight");
  console.log(triggerWidth, "triggerWidth");
  console.log(top, "top");
  console.log(left, "left");

  return (
    <ul
      id={id}
      onClick={handleInnerClick}
      className={clsx(menuElStyle, styles[`${BLOCK_NAME}-menu--${position}`])}
      data-is-fade-out={fadeOut}
      ref={menuEl}
      role="menu"
      style={{ left, top }}
    >
      {children}
    </ul>
  );
};

const Frame = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles[`${BLOCK_NAME}`]}>{children}</div>;
};

export const DropdownMenu = {
  Frame,
  List,
};
