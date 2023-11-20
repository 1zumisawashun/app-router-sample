import { ErrorEmpty, Image } from "@/components";
import { fetchImages } from "@/features/gallery/hooks/fetchImages";
import addBlurredDataUrls from "@/features/gallery/hooks/getBase64";
import type { ImageResults } from "@/functions/models/Images";

type Props = {
  topic?: string;
};

export const Gallery = async ({ topic }: Props) => {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images: ImageResults | undefined = await fetchImages(url);

  if (!images) return <ErrorEmpty></ErrorEmpty>;

  const photoWithBlur = await addBlurredDataUrls(images);

  const photos = photoWithBlur.map((photo) => {
    const widthHeightRatio = photo.height / photo.width;
    const galleryHeight = Math.ceil(250 * widthHeightRatio);

    return { ...photo, src: photo.src.large, height: galleryHeight };
  });

  return (
    <section className="px-1 my-3 grid gap-2 grid-cols-gallery">
      {/* NOTE:check tailwind.config.js */}
      {photos.map((photo) => {
        return (
          <div
            key={photo.id}
            className="w-[280px] justify-self-center"
            style={{ gridRow: `span ${Math.ceil(photo.height / 10) + 1}` }}
          >
            <Image {...photo} />
          </div>
        );
      })}
    </section>
  );
};
