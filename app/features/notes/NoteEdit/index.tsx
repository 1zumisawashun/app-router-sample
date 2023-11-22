"use client";
import {
  AnchorButton,
  Button,
  ButtonWrapper,
  FormWrapper,
  InputText,
  InputTextarea,
} from "@/components";
import { Note } from "@/functions/models/Notes";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type Props = {
  item: Note;
};

export const NoteEdit: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);
  const updateNote = useCallback(async () => {
    const res = await fetch(`/api/notes/${item.id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      alert("Note updated");
      router.push(`/notes/${item.id}`);
      // NOTE:現在のページのデータをサーバーから再取得する
      router.refresh();
    } else {
      alert("Note failed to update");
    }
  }, [body, item.id, router, title]);

  return (
    <FormWrapper>
      <InputText
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></InputText>
      <InputTextarea
        label="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></InputTextarea>

      <ButtonWrapper position="end">
        <AnchorButton href={`/notes/${item.id}`} theme="secondary">
          Cancel
        </AnchorButton>
        <Button onClick={updateNote}>Save</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
