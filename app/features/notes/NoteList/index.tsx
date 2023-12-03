import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFetch";
import { LoadingDot } from "@/components/elements/LoadingDot";
import { apiUrl } from "@/functions/constants/api";
import { zNotes } from "@/functions/models/Notes";
import { SearchParams } from "@/functions/types/Common";
import { Suspense } from "react";
import "server-only";
import NoteLists from "./components/NoteList";

export const NoteList = async ({ category }: SearchParams) => {
  const notes = await getNotes();
  console.log(category);
  // TODO:クエリでフィルターをする

  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<LoadingDot />}>
        <NoteLists initialState={notes} />
      </Suspense>
    </ErrorBoundary>
  );
};

const getNotes = async () => {
  // ssrしている
  const res = await fetch(`${apiUrl}/notes`, { cache: "no-store" });
  const data = await res.json();
  const notes = zNotes.parse(data);
  return notes;
};
