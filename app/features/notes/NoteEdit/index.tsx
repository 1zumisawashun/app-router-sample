"use client";
import {
  AnchorButton,
  Button,
  FlexWrapper,
  FormWrapper,
  InputCheckbox,
  InputText,
  InputTextarea,
} from "@/components";
import { useToast } from "@/functions/hooks";
import { zCategories } from "@/functions/models/Categories";
import { Note } from "@/functions/models/Notes";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

type Props = {
  item: Note;
};

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const data = await res.json();
    const categories = zCategories.parse(data);
    return categories;
  });

export const NoteEdit: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  // const { setStack, stackRef, setVisible } =
  //   useStackNotificationManagerContext();
  const { showToast, closeToast } = useToast();

  useEffect(() => {
    return () => closeToast();
  }, []);

  const [title, setTitle] = useState(item.title);
  const [categories, setCategories] = useState(
    item.categories ? item.categories.map((category) => category.id) : []
  );
  const [body, setBody] = useState(item.body);

  const { data } = useSWR("/api/categories", fetcher);

  const categoryOptions = data
    ? data.map((category) => {
        return {
          label: category.name,
          value: category.id,
        };
      })
    : [];

  const updateNote = useCallback(async () => {
    const res = await fetch(`/api/notes/${item.id}`, {
      method: "PUT",
      body: JSON.stringify({ title, categories, body }),
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
  }, [body, item.id, router, title, categories]);

  const handleCategories = (e: any) => {
    const val = e.target.value;
    console.log(val);
  };

  return (
    <>
      <FormWrapper>
        <InputText
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></InputText>

        {categoryOptions.map((category) => (
          <InputCheckbox
            key={category.value}
            value={category.value}
            onChange={handleCategories}
          >
            {category.label}
          </InputCheckbox>
        ))}

        <Button
          onClick={() => showToast({ message: "test", theme: "success" })}
        >
          test
        </Button>

        <InputTextarea
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></InputTextarea>

        <FlexWrapper position="end">
          <AnchorButton href={`/notes/${item.id}`} theme="secondary">
            Cancel
          </AnchorButton>
          <Button onClick={updateNote}>Save</Button>
        </FlexWrapper>
      </FormWrapper>
    </>
  );
};
