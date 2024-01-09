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

// ちょっとユースケース的に考えにくいかも
// @see https://twitter.com/mattpocockuk/status/1660954698386403332?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
type SomeObject = {
  a: string;
  b: string;
};

export type Example2 = {
  [K in keyof SomeObject]: {
    key: K;
  };
}[keyof SomeObject];

// 絞り込みができるのか勉強になるわ
// @see https://twitter.com/t__keshi/status/1660643172647673856?s=12&t=0Bs_ltBYiO3nhiiL9YZAEw
type AllNodeKey =
  | "userId"
  | "userName"
  | "userProfile"
  | "postId"
  | "postTitle"
  | "postSlug";

type PostNodeKey = Exclude<AllNodeKey, `${"user"}${string}`>;
// const example: PostNodeKey = "userId"; // error!
// const example2: PostNodeKey = "userName"; // error!
const example3: PostNodeKey = "postId";
