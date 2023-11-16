"use client";
import { Note, zNotes } from "@/functions/models/Notes";
import useSWR from "swr";
import { NoteItem } from "../NoteItem";
import styles from "./styles.module.scss";

type Props = {
  initialState: Note[];
};

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const data = await res.json();
    const notes = zNotes.parse(data);
    return notes;
  });

const NoteList: React.FC<Props> = ({ initialState }) => {
  const { data } = useSWR("/api/notes", fetcher, {
    suspense: true,
    fallbackData: initialState,
  });

  return (
    <div className={styles["note-list-wrapper"]}>
      {data.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </div>
  );
};

export default NoteList;
