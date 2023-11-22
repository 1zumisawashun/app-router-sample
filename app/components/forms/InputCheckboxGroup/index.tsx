import { InputCheckbox } from "@/components";
import { SelectOptions } from "@/functions/types/Common";
import { ComponentPropsWithRef, forwardRef, useId } from "react";
import {
  InputWrapper,
  InputWrapperPropsPassThroughProps,
} from "../InputWrapper";

export type CheckboxProps = ComponentPropsWithRef<"input"> & {
  options: SelectOptions;
};
export type InputFieldProps = CheckboxProps & InputWrapperPropsPassThroughProps;

export const InputCheckboxGroup = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      description,
      options,
      children,
      className,
      isOptioned,
      isRequired,
      disabled,
      width,
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <InputWrapper
        label={label}
        error={error}
        description={description}
        id={id}
        isOptioned={isOptioned}
        isRequired={isRequired}
        disabled={disabled}
        width={width}
      >
        {options.map((option) => (
          <InputCheckbox {...props} key={option.value}>
            {option.label}
          </InputCheckbox>
        ))}
      </InputWrapper>
    );
  }
);

InputCheckboxGroup.displayName = "Input";
