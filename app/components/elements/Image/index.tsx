import NextImage from "next/image";

type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

// NOTE:Image型を内包していればok
type HasImageProperties<T> = T extends Image ? T : never;

export const Image = async <T,>(image: HasImageProperties<T>) => {
  return (
    <NextImage
      src={image.src}
      alt={image.alt}
      width={image?.width ?? 250}
      height={image?.height ?? 250}
    ></NextImage>
  );
};
