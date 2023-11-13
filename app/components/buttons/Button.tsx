import { CircularProgress } from "@/app/components";
import { SizeType, ThemeType, VariantType } from "@/app/functions/types/Common";
import clsx from "clsx";
import { UnstyledButton, UnstyledButtonProps } from "./UnstyledButton";
import styles from "./styles.module.scss";

type ButtonProps = {
  size?: SizeType;
  variant?: VariantType;
  theme?: ThemeType;
  loading?: boolean;
} & UnstyledButtonProps;

export const Button = ({
  type,
  children,
  theme = "primary",
  variant = "contained",
  size = "medium",
  loading,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <UnstyledButton
      {...props}
      type="button"
      className={clsx(className, styles.module)}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      aria-disabled={disabled}
    >
      {loading ? <CircularProgress {...{ size, theme, variant }} /> : children}
    </UnstyledButton>
  );
};
