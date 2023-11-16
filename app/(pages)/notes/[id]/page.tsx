import { SubHeader } from "@/components";
import { NoteDetail } from "@/features/notes/NoteDetail";
import { getNote } from "@/features/notes/NoteDetail/hooks/getNote";

// NOTE:トップレベルでexportしないと意味がない
export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);
  return (
    <SubHeader href={`/notes`} title="View Note">
      <NoteDetail item={note} />
    </SubHeader>
  );
}
