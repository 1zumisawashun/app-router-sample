import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export type UnstyledButtonProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "color">;

export type UnstyledButtonAnchorProps = {
  children: ReactNode;
  className?: string;
} & LinkProps;

export const UnstyledButton = ({
  type = "button",
  children,
  ...props
}: UnstyledButtonProps) => {
  return (
    <button {...props} type={type}>
      {children}
    </button>
  );
};

export const UnstyledButtonAnchor = ({
  children,
  ...props
}: UnstyledButtonAnchorProps) => {
  return <Link {...props}>{children}</Link>;
};
