import { SubHeader } from "@/components";
import { NoteCreate } from "@/features/notes/NoteCreate";

export default async function Page() {
  return (
    <SubHeader href={`/notes`} title="New Note">
      <NoteCreate />
    </SubHeader>
  );
}
