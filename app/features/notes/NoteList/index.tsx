import { ErrorBoundary, ErrorFetch, Loading } from "@/components";
import { apiUrl } from "@/functions/constants/api";
import { zNotes } from "@/functions/models/Notes";
import { Suspense } from "react";
import "server-only";
import NoteLists from "./components/NoteList";

export const NoteList = async () => {
  const notes = await getNotes();

  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<Loading />}>
        <NoteLists initialState={notes} />
      </Suspense>
    </ErrorBoundary>
  );
};

const getNotes = async () => {
  const res = await fetch(`${apiUrl}/notes`, { cache: "no-store" });
  const data = await res.json();
  const notes = zNotes.parse(data);
  return notes;
};
