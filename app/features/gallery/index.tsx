import { Image } from "@/components";
import { fetchImages } from "@/features/gallery/hooks/fetchImages";
import addBlurredDataUrls from "@/features/gallery/hooks/getBase64";
import type { ImageResults } from "@/functions/models/Images";

export const Gallery = async () => {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImageResults | undefined = await fetchImages(url);

  if (!images) return <p>No Images Found</p>;

  const photoWithBlur = await addBlurredDataUrls(images);

  const photos = photoWithBlur.map((photo) => {
    return { ...photo, src: photo.src.large };
  });

  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {/* NOTE:check tailwind.config.js */}
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group"
        >
          <Image {...photo} />
        </div>
      ))}
    </section>
  );
};
