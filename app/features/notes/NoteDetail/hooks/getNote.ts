import { apiUrl } from "@/functions/constants/api";
import { zNote } from "@/functions/models/Notes";
import "server-only";

export const getNote = async (id: string) => {
  const res = await fetch(`${apiUrl}/notes/${id}`, { cache: "no-store" });
  const data = await res.json();
  const note = zNote.parse(data);
  return note;
};
