import { Gallery } from "@/features/gallery";

type Props = {
  params: {
    term: string;
  };
};

export function generateMetadata({ params: { term } }: Props) {
  return { title: `Results for ${term}` };
}

export default function Page({ params: { term } }: Props) {
  return <Gallery topic={term} />;
}
