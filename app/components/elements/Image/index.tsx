import NextImage from "next/image";

type Image = {
  src: string;
  alt: string;
  blurredDataUrl?: string;
};

// NOTE:Image型を内包していればok
type HasImageProperties<T> = T extends Image ? T : never;

export const Image = async <T,>(image: HasImageProperties<T>) => {
  return (
    <NextImage
      src={image.src}
      alt={image.alt}
      fill
      sizes="276px" // NOTE:https://ausi.github.io/respimagelint/
      className="object-cover group-hover:opacity-75"
      placeholder="blur"
      blurDataURL={image.blurredDataUrl}
    ></NextImage>
  );
};
