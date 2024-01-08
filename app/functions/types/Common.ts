export type ThemeType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "transparent";

export type VariantType =
  | "contained"
  | "outlined"
  | "transparent"
  | "card"
  | "information"
  | "confirmation"
  | "error";

export type SizeType = "small" | "medium" | "large";

export type PositionType = "start" | "center" | "end";

export type StatusType = "loading" | "disabled" | "error";

export type WidthType = "full" | "half" | "quarter" | "auto";

export type ShapeType = "square" | "round";

export type ColorType = "black" | "grey";

export type SelectOption<T extends string = string> = {
  value: T;
  label: string;
};

export type SelectOptions<T extends string = string> = SelectOption<T>[];

export type SearchParams = { [key: string]: string | string[] | undefined };

type Position = "top" | "bottom" | "right" | "left";

export type PositionOffset<P extends Position = Position> = {
  [K in P]: number;
};

export type StackPosition = `${"top" | "bottom" | "right" | "left"}${
  | "Left"
  | "Center"
  | "Right"}`;

/*
 * @see https://twitter.com/mattpocockuk/status/1740418559623508269?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
 */
type InferValueFromColor<Color extends string> =
  Color extends `${infer N}-${infer C}-${infer T}`
    ? {
        namespace: N;
        color: C;
        tone: T;
      }
    : never;

type Example = InferValueFromColor<"text-red-500">;

/*
 * @see https://twitter.com/mattpocockuk/status/1740702711652225157?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
 */
const inferValueFromColor = <
  N extends string,
  C extends string,
  T extends number
>(
  colorTag: `${N}-${C}-${T}`
) => {
  const [namespace, color, tone] = colorTag.split("-");
  return {
    namespace: namespace as N,
    color: color as C,
    tone: Number(tone) as T,
  };
};

const example = inferValueFromColor("text-red-500");

type A = "foo"; // global scope
type B = A extends infer C
  ? C extends "foo"
    ? true
    : false // *only* inside this expression, C represents A
  : never;

type Fruit = "apple" | "banana" | "orange";

// I really wish that Omit and Pick were called OmitKeys and PickKeys instead.
// @see https://twitter.com/mattpocockuk/status/1691402204798746624?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
// type CitrusFruit = Omit<Fruit, "apple">;
type CitrusFruit = Exclude<Fruit, "apple">;
