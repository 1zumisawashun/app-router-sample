import { SubHeader } from "@/components/layouts/SubHeader";
import { NoteCreate } from "@/features/notes/NoteCreate";

export default async function Page() {
  return (
    <SubHeader href={`/notes`} title="New Note">
      <NoteCreate />
    </SubHeader>
  );
}
