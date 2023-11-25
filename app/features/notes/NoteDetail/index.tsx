"use client";
import {
  AnchorButton,
  Button,
  FlexWrapper,
  Label,
  Modal,
  UnstyledButtonAnchor,
} from "@/components";
import { useDisclosure } from "@/functions/hooks";
import { Note } from "@/functions/models/Notes";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import styles from "./styles.module.scss";

type Props = {
  item: Note;
};

export const NoteDetail: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const deleteModal = useDisclosure();

  const deleteNote = useCallback(async () => {
    const res = await fetch(`/api/notes/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      alert("Note deleted");
      router.push(`/notes`);
      // NOTE:現在のページのデータをサーバーから再取得する
      router.refresh();
    } else {
      alert("Note failed to delete");
    }
  }, [item.id, router]);

  return (
    <>
      <div className={styles["note-detail-container"]}>
        <h3 className={styles["note-detail-title"]}>{item.title}</h3>

        {item.categories ? (
          <FlexWrapper>
            {item.categories.map((category) => (
              <UnstyledButtonAnchor
                key={category.id}
                href={`/notes?category=${category.name}`}
              >
                <Label>{category.name}</Label>
              </UnstyledButtonAnchor>
            ))}
          </FlexWrapper>
        ) : null}

        <p className={styles["note-detail-text"]}>{item.body}</p>

        <FlexWrapper position="end">
          <AnchorButton href={`/notes/${item.id}/edit`}>Edit</AnchorButton>
          <Button onClick={deleteModal.open} theme="secondary">
            Delete
          </Button>
        </FlexWrapper>
      </div>

      <Modal isOpen={deleteModal.isOpen} close={deleteModal.close}>
        <div className={styles["note-detail-modal-body"]}>
          <p className={styles["note-detail-modal-text"]}>
            本当に削除しますか？
          </p>
          <FlexWrapper position="center">
            <Button onClick={deleteModal.close} theme="secondary">
              Cancel
            </Button>
            <Button onClick={deleteNote} theme="danger">
              Delete
            </Button>
          </FlexWrapper>
        </div>
      </Modal>
    </>
  );
};
