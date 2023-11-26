import { CircularProgress } from "@/components";
import { SizeType, ThemeType, VariantType } from "@/functions/types/Common";
import { UnstyledButton, UnstyledButtonProps } from "../UnstyledButton";
import styles from "./styles.module.scss";

type ButtonProps = {
  size?: SizeType;
  variant?: VariantType;
  theme?: ThemeType;
  loading?: boolean;
} & UnstyledButtonProps;

export const Button = ({
  type = "button",
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
      type={type}
      className={styles["module"]}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      aria-disabled={disabled}
    >
      {loading ? <CircularProgress {...{ size, theme, variant }} /> : children}
    </UnstyledButton>
  );
};
