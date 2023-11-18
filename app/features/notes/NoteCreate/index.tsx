"use client";
import {
  AnchorButton,
  Button,
  ButtonWrapper,
  FormWrapper,
  InputText,
  InputTextarea,
} from "@/components";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { z } from "zod";

export const NoteCreate: React.FC = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createNote = useCallback(async () => {
    const res = await fetch(`/api/notes`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const id = z.number().parse(await res.json());
      alert(`${id} Note created`);
      router.push(`/notes`);
      // NOTE:現在のページのデータをサーバーから再取得する
      router.refresh();
    } else {
      alert("Note failed to create");
    }
  }, [body, router, title]);

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
        <AnchorButton href={`/notes`} theme="secondary">
          Cancel
        </AnchorButton>
        <Button onClick={createNote}>Create</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
