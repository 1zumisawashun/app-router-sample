import { CheckBold } from "@/components";
import { ComponentPropsWithRef, forwardRef } from "react";
import styles from "./styles.module.scss";

export type CheckboxProps = ComponentPropsWithRef<"input"> & {
  children?: React.ReactNode;
  error?: string;
};
export type InputFieldProps = CheckboxProps;

export const InputCheckbox = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ children, error, ...props }, ref) => {
    const BLOCK_NAME = "input-checkbox";
    return (
      <label className={styles[`${BLOCK_NAME}-label`]}>
        <input
          className={styles[`${BLOCK_NAME}-input`]}
          ref={ref}
          type="checkbox"
          hidden
          data-error={Boolean(error)}
          {...props}
        />
        <span className={styles[`${BLOCK_NAME}-icon`]}>
          <CheckBold aria-hidden="true" />
        </span>
        {children && (
          <span className={styles[`${BLOCK_NAME}-text`]}>{children}</span>
        )}
      </label>
    );
  }
);

InputCheckbox.displayName = "Input";
