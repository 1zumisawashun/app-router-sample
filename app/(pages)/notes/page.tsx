import { UnstyledButtonAnchor } from "@/components/buttons";
import { AddIcon } from "@/components/elements/SvgIcon";
import { SubHeader } from "@/components/layouts/SubHeader";
import { NoteList } from "@/features/notes/NoteList";
import { SearchParams } from "@/functions/types/Common";
import "server-only";
import styles from "./styles.module.scss";

// 1. 静的/動的レンダリングや再生成の間隔を指定
export const revalidate = 0;

export const metadata = {
  title: "List Notes",
};

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // SCでクエリの取得をする
  const category = searchParams["category"];

  return (
    <main className="relative">
      <UnstyledButtonAnchor
        href="/notes/new"
        className={styles["styled-button-anchor"]}
      >
        <span className={styles["icon-wrapper"]}>
          <AddIcon />
        </span>
      </UnstyledButtonAnchor>

      <SubHeader title="List Notes">
        <div className="_mt-2">
          <NoteList category={category} />
        </div>
      </SubHeader>
    </main>
  );
}
