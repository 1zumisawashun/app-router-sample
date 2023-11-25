export type ThemeType = "primary" | "secondary" | "danger" | "success";

export type VariantType = "contained" | "outlined";

export type SizeType = "small" | "medium" | "large";

export type PositionType = "start" | "center" | "end";

export type StatusType = "loading" | "disabled" | "error";

export type WidthType = "full" | "half" | "quarter" | "auto";

export type SelectOption<T extends string = string> = {
  value: T;
  label: string;
};

export type SelectOptions<T extends string = string> = SelectOption<T>[];

export type SearchParams = { [key: string]: string | string[] | undefined };
