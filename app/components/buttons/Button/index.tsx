import { CircularProgress } from "@/components";
import {
  ShapeType,
  SizeType,
  ThemeType,
  VariantType,
} from "@/functions/types/Common";
import clsx from "clsx";
import {
  UnstyledButton,
  UnstyledButtonAnchor,
  UnstyledButtonAnchorProps,
  UnstyledButtonProps,
} from "../UnstyledButton";
import styles from "./styles.module.scss";

type BaseProps = {
  size?: SizeType;
  variant?: VariantType;
  theme?: ThemeType;
  loading?: boolean;
  shape?: ShapeType;
  prefix?: any;
  suffix?: any;
};

export type ButtonProps = {} & UnstyledButtonProps & BaseProps;

export type AnchorButtonProps = {} & UnstyledButtonAnchorProps & BaseProps;

export const Button = ({
  type = "button",
  children,
  theme = "primary",
  variant = "contained",
  size = "medium",
  shape = "square",
  loading,
  disabled,
  className,
  prefix,
  suffix,
  ...props
}: ButtonProps) => {
  return (
    <UnstyledButton
      {...props}
      type={type}
      className={clsx(className, styles["button"])}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      data-shape={shape}
      aria-disabled={disabled}
    >
      {loading ? (
        <CircularProgress {...{ size, theme, variant }} />
      ) : (
        <>
          {prefix ?? null}
          {children}
          {suffix ?? null}
        </>
      )}
    </UnstyledButton>
  );
};

export const AnchorButton = ({
  children,
  theme = "primary",
  variant = "contained",
  size = "medium",
  shape = "square",
  className,
  prefix,
  suffix,
  ...props
}: AnchorButtonProps) => {
  return (
    <UnstyledButtonAnchor
      {...props}
      className={clsx(className, styles["button"])}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      data-shape={shape}
    >
      {prefix ?? null}
      {children}
      {suffix ?? null}
    </UnstyledButtonAnchor>
  );
};
