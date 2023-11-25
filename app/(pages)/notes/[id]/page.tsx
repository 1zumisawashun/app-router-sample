import { SubHeader } from "@/components/layouts";
import { NoteDetail } from "@/features/notes/NoteDetail";
import { getNote } from "@/features/notes/NoteDetail/hooks/getNote";

// NOTE:トップレベルでexportしないと意味がない
export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id); // server-only
  return (
    <SubHeader href={`/notes`} title="View Note">
      {/* 普通のpropsでもSCで取得したデータはCCに流せるぽい */}
      <NoteDetail item={note} /> {/* use client */}
    </SubHeader>
  );
}
