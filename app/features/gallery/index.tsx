import { Image } from "@/components";
import { fetchImages } from "@/functions/helpers/fetchImages";
import type { ImageResults } from "@/functions/models/Images";

export const Gallery = async () => {
  const url = "https://api.pexels.com/v1/curated";
  const images: ImageResults | undefined = await fetchImages(url);

  if (!images) return <p>No Images Found</p>;

  const photos = images.photos.map((photo) => {
    return { ...photo, src: photo.src.large };
  });

  return (
    <main>
      <div className="container-sp _mb-2">
        {/* NOTE:check tailwind.config.js */}
        <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
          {photos.map((photo) => (
            <div key={photo.id} className="h-64 bg-gray-200 rounded-xl">
              <Image {...photo} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};
