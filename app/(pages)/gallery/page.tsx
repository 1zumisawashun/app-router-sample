import { Gallery } from "@/features/gallery";
import "server-only";

export const revalidate = 0;

export default async function Page() {
  return <Gallery />;
}
