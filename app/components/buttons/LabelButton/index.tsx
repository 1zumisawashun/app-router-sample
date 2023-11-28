import { Label, LabelProps } from "../../elements/Label";
import {
  UnstyledButton,
  UnstyledButtonAnchor,
  UnstyledButtonAnchorProps,
  UnstyledButtonProps,
} from "../UnstyledButton";

type BaseProps = {} & Omit<LabelProps, "children">;

export type LabelButtonProps = {} & UnstyledButtonProps & BaseProps;

export type LabelButtonAnchorProps = {} & UnstyledButtonAnchorProps & BaseProps;

export const LabelButton = ({
  children,
  theme = "primary",
  ...props
}: LabelButtonProps) => {
  return (
    <UnstyledButton {...props}>
      <Label theme={theme}>{children}</Label>
    </UnstyledButton>
  );
};

export const LabelButtonAnchor = ({
  children,
  theme = "primary",
  ...props
}: LabelButtonAnchorProps) => {
  return (
    <UnstyledButtonAnchor {...props}>
      <Label theme={theme}>{children}</Label>
    </UnstyledButtonAnchor>
  );
};
