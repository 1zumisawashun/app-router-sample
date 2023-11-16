"use client";
import { AnchorButton, Button, ButtonWrapper } from "@/components";
import { Note } from "@/functions/models/Notes";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type Props = {
  item: Note;
};

export const NoteDetail: React.FC<Props> = ({ item }) => {
  const router = useRouter();
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
      router.refresh();
    } else {
      alert("Note failed to delete");
    }
  }, [item.id, router]);

  return (
    <div className="flex flex-col bg-gray-100 rounded-lg relative p-5 gap-2.5">
      <h3 className="text-large -pink -bold">{item.title}</h3>
      <p className="text-normal -grey">{item.body}</p>

      <ButtonWrapper className="-end">
        <AnchorButton href={`/notes/${item.id}/edit`}>Edit</AnchorButton>
        <Button onClick={deleteNote} theme="danger">
          Delete
        </Button>
      </ButtonWrapper>
    </div>
  );
};
