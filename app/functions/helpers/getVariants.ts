/**
 * @description CSS Modulesでvariantを有効にする
 */
export const getVariants = ({
  className,
  styles,
}: {
  className?: string;
  styles: { readonly [key: string]: string };
}) => {
  const names = className?.split(" ");

  const variants = names
    ?.map((name) => styles[`${name}`])
    .filter(Boolean) as string[];

  return variants;
};
