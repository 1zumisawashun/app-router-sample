import { EditIcon, UnstyledButtonAnchor } from "@/components";
import { Note } from "@/functions/models/Notes";
import styles from "./styles.module.scss";

type NoteProps = {
  item: Note;
};

export const NoteItem: React.FC<NoteProps> = ({ item }) => {
  return (
    <div className={styles["note-item-wrapper"]}>
      <UnstyledButtonAnchor
        href={`/notes/${item.id}/edit`}
        className={styles["styled-button-anchor"]}
      >
        <span className={styles["icon-wrapper"]}>
          <EditIcon />
        </span>
      </UnstyledButtonAnchor>

      <UnstyledButtonAnchor href={`/notes/${item.id}`} prefetch={false}>
        <h3 className={styles["link-item"]}>{item.title}</h3>
      </UnstyledButtonAnchor>
      <p className="text-normal -grey line-clamp-3">{item.body}</p>
    </div>
  );
};
