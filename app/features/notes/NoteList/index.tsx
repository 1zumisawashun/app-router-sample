import { AddIcon, ErrorBoundary, FetchError, Loading } from "@/components";
import { apiUrl } from "@/functions/constants/api";
import { zNotes } from "@/functions/models/Notes";
import Link from "next/link";
import { Suspense } from "react";
import "server-only";
import NoteLists from "./components/NoteList";

// 1. 静的/動的レンダリングや再生成の間隔を指定
export const revalidate = 0;

export const metadata = {
  title: "List Notes",
};

export const NoteList = async () => {
  // 2. APIを用いたデータ取得
  const notes = await getNotes();
  return (
    <main className="mx-2 sm:mx-4 relative">
      <div className="container-sp _mb-2">
        <section>
          {/* ノート作成ページは未実装のため一覧ページに遷移 */}
          <Link
            href="/notes/new"
            className="absolute top-0 right-2 z-10 text-white bg-pink-500 hover:bg-pink-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <AddIcon></AddIcon>
            <span className="sr-only">New Note</span>
          </Link>
          <h2 className="mb-6 text-gray-400 text-xs">List Notes</h2>
          {/* 3. Client ComponentsのSuspenseの使用 */}
          <ErrorBoundary fallback={<FetchError />}>
            <Suspense fallback={<Loading />}>
              <NoteLists initialState={notes} />
            </Suspense>
          </ErrorBoundary>
        </section>
      </div>
    </main>
  );
};

const getNotes = async () => {
  const res = await fetch(`${apiUrl}/notes`, { cache: "no-store" });
  const data = await res.json();
  const notes = zNotes.parse(data);
  return notes;
};
