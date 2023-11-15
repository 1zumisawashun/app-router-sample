import { getNote } from "@/features/notes/NoteDetail/hooks/getNote";
import { NoteEdit } from "@/features/notes/NoteEdit";
import Link from "next/link";

// NOTE:トップレベルでexportしないと意味がない
export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);
  return (
    <section>
      <Link
        href={`/notes/${params.id}`}
        className="inline-block focus-visible:ring ring-pink-300 text-gray-500 hover:text-pink-500 active:text-pink-600 text-s md:text-base font-semibold rounded-lg outline-none transition duration-100"
      >
        ← back
      </Link>
      <h2 className="my-4 text-gray-400 text-xs">Edit Note</h2>
      <NoteEdit item={note} />
    </section>
  );
}
