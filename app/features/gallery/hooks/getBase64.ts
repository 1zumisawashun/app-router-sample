import type { ImageResults, Photo } from "@/functions/models/Images";
import { getPlaiceholder } from "plaiceholder";

{
  /* NOTE:check plaiceholder */
}
async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
    return undefined;
  }
}

export default async function addBlurredDataUrls(
  images: ImageResults
): Promise<Photo[]> {
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Results[i];
    return photo;
  });
  return photosWithBlur;
}
