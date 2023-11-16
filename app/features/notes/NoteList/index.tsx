import { ErrorBoundary, FetchError, Loading } from "@/components";
import { apiUrl } from "@/functions/constants/api";
import { zNotes } from "@/functions/models/Notes";
import { Suspense } from "react";
import "server-only";
import NoteLists from "./components/NoteList";

// 1. 静的/動的レンダリングや再生成の間隔を指定
export const revalidate = 0;

// FIXME:そもそもこのexportはpage.tsxに入れないと効果でない？
export const metadata = {
  title: "List Notes",
};

export const NoteList = async () => {
  const notes = await getNotes();

  return (
    <ErrorBoundary fallback={<FetchError />}>
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
