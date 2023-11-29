import { CheckIcon } from "@/components";
import { ComponentPropsWithRef, forwardRef } from "react";
import styles from "./styles.module.scss";

export type RadioProps = ComponentPropsWithRef<"input"> & {
  children?: React.ReactNode;
  error?: string;
};
export type InputFieldProps = RadioProps;

export const InputRadio = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ children, error, ...props }, ref) => {
    const BLOCK_NAME = "input-radio";
    return (
      <label className={styles[`${BLOCK_NAME}-label`]}>
        <input
          className={styles[`${BLOCK_NAME}-input`]}
          ref={ref}
          type="radio"
          hidden
          data-error={Boolean(error)}
          {...props}
        />
        <span className={styles[`${BLOCK_NAME}-icon`]}>
          <CheckIcon aria-hidden="true" />
        </span>
        {children && (
          <span className={styles[`${BLOCK_NAME}-text`]}>{children}</span>
        )}
      </label>
    );
  }
);

InputRadio.displayName = "Input";
