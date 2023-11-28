import { AddIcon, EditIcon } from "@/components";
import {
  ShapeType,
  SizeType,
  ThemeType,
  VariantType,
} from "@/functions/types/Common";
import {
  UnstyledButton,
  UnstyledButtonAnchor,
  UnstyledButtonAnchorProps,
  UnstyledButtonProps,
} from "../UnstyledButton";
import styles from "./styles.module.scss";

type BaseProps = {
  name?: "add" | "edit";
  size?: SizeType;
  shape?: ShapeType;
  variant?: VariantType;
  theme?: ThemeType;
  disabled?: boolean;
};

export type IconButtonProps = {} & Omit<UnstyledButtonProps, "children"> &
  BaseProps;

export type IconButtonAnchorProps = {} & Omit<
  UnstyledButtonAnchorProps,
  "children"
> &
  BaseProps;

const Icons = {
  add: AddIcon,
  edit: EditIcon,
};

export const IconButton = ({
  type = "button",
  theme = "primary",
  variant = "contained",
  name = "edit",
  size = "medium",
  shape = "round",
  disabled,
  ...props
}: IconButtonProps) => {
  const Tag = Icons[`${name}`];

  return (
    <UnstyledButton
      {...props}
      type={type}
      className={styles["icon-button"]}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      data-shape={shape}
      aria-disabled={disabled}
    >
      <Tag />
    </UnstyledButton>
  );
};

export const IconButtonAnchor = ({
  theme = "primary",
  variant = "contained",
  name = "add",
  size = "medium",
  shape = "round",
  disabled,
  ...props
}: IconButtonAnchorProps) => {
  const Tag = Icons[`${name}`];

  return (
    <UnstyledButtonAnchor
      {...props}
      className={styles["icon-button"]}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      data-shape={shape}
      aria-disabled={disabled}
    >
      <Tag />
    </UnstyledButtonAnchor>
  );
};
