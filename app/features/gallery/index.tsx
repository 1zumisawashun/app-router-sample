import { Image } from "@/components";
import { fetchImages } from "@/features/gallery/hooks/fetchImages";
import { getVariants } from "@/functions/helpers";
import type { ImageResults } from "@/functions/models/Images";
import clsx from "clsx";
import styles from "./styles.module.scss";

export const Gallery = async () => {
  const url = "https://api.pexels.com/v1/curated";
  const images: ImageResults | undefined = await fetchImages(url);

  if (!images) return <p>No Images Found</p>;

  const photos = images.photos.map((photo) => {
    return { ...photo, src: photo.src.large };
  });

  const variants = getVariants({ className: "-pink -bold", styles });

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {/* NOTE:check tailwind.config.js */}
      <p
        className={
          (clsx(styles["custom-test"], styles["-bold -large"]), "_mt-2")
        }
      >
        test
      </p>
      {photos.map((photo) => (
        <div key={photo.id} className="h-64 bg-gray-200 rounded-xl">
          <Image {...photo} />
        </div>
      ))}
    </section>
  );
};
