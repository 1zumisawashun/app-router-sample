import { getNote } from "@/features/notes/NoteDetail/hooks/getNote";
import { Metadata } from "next/types";

// NOTE:トップレベルでexportしないと意味がない
export const revalidate = 0;

// ページのメタデータを動的に取得
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const note = await getNote(params.id);
  return { title: note.title };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
