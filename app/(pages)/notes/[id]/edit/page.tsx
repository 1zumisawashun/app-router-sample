import { SubHeader } from "@/components";
import { getNote } from "@/features/notes/NoteDetail/hooks/getNote";
import { NoteEdit } from "@/features/notes/NoteEdit";

// NOTE:トップレベルでexportしないと意味がない
export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);
  return (
    <SubHeader href={`/notes/${params.id}`} title="Edit Note">
      <NoteEdit item={note} />
    </SubHeader>
  );
}
