import env from "@/functions/libs/env";
import type { ImageResults } from "@/functions/models/Images";
import { ImageSchemaWithPhotos } from "@/functions/models/Images";

export const fetchImages = async (
  url: string
): Promise<ImageResults | undefined> => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });
    if (!res.ok) throw new Error("Fetch Images error!");
    const imageResults: ImageResults = await res.json();

    // parse data with zod schema
    const parsedData = ImageSchemaWithPhotos.parse(imageResults);
    if (parsedData.total_results === 0) return undefined;
    return parsedData;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
    return undefined;
  }
};
