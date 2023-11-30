import { ColorType } from "@/functions/types/Common";
import {
  AnchorButton,
  AnchorButtonProps,
  Button,
  ButtonProps,
} from "../Button";
import styles from "./styles.module.scss";

type BaseType = {
  color?: ColorType;
};

export type TextButtonProps = {} & Omit<ButtonProps, "variant"> & BaseType;

export type TextButtonAnchorProps = {} & Omit<AnchorButtonProps, "variant"> &
  BaseType;

export const TextButton = ({ children, color, ...props }: TextButtonProps) => {
  return (
    <Button
      {...props}
      data-color={color}
      variant="transparent"
      className={styles["text-button"]}
    >
      {children}
    </Button>
  );
};

export const TextButtonAnchor = ({
  children,
  color,
  ...props
}: TextButtonAnchorProps) => {
  return (
    <AnchorButton
      {...props}
      data-color={color}
      variant="transparent"
      className={styles["text-button"]}
    >
      {children}
    </AnchorButton>
  );
};
