import { AddIcon, SubHeader, UnstyledButtonAnchor } from "@/components";
import { NoteList } from "@/features/notes/NoteList";
import styles from "./styles.module.scss";

export default async function Page() {
  return (
    <main className="relative">
      <UnstyledButtonAnchor
        href="/notes/new"
        className={styles["styled-button-anchor"]}
      >
        <span className={styles["icon-wrapper"]}>
          <AddIcon />
        </span>
        <span className="sr-only">New Note</span>
      </UnstyledButtonAnchor>
      
      <SubHeader title="List Notes">
        <div className="_mt-2">
          <NoteList />
        </div>
      </SubHeader>
    </main>
  );
}
