import { SizeType } from "@/functions/types/Common";
import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./styles.module.scss";

type BaseTextButtonProps = {
  color?: "black" | "grey";
  size?: SizeType;
  children: ReactNode;
  className?: string;
};

export type UnstyledButtonProps = {
  type?: "button" | "submit" | "reset";
} & ComponentPropsWithoutRef<"button"> &
  BaseTextButtonProps;

export type UnstyledButtonAnchorProps = {} & LinkProps & BaseTextButtonProps;

// NOTE:unstyled-buttonにhoverを装飾しただけ

export const TextButton = ({
  type = "button",
  children,
  color = "black",
  size = "medium",
  ...props
}: UnstyledButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={styles["text-button"]}
      data-color={color}
      data-size={size}
    >
      {children}
    </button>
  );
};

export const TextButtonAnchor = ({
  children,
  color = "black",
  size = "medium",
  ...props
}: UnstyledButtonAnchorProps) => {
  return (
    <Link
      {...props}
      className={styles["text-button"]}
      data-color={color}
      data-size={size}
    >
      {children}
    </Link>
  );
};
