"use client";
import {
  Button,
  ButtonWrapper,
  FormWrapper,
  InputText,
  InputTextarea,
} from "@/components";
import { Settings } from "@/functions/models/Settings";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type Props = {
  value: Settings;
};

export const EditSettings: React.FC<Props> = ({ value }) => {
  const router = useRouter();

  const [version, setVersion] = useState(value.version);
  const [faq, setFaq] = useState(value.faq);
  const [tos, setTos] = useState(value.tos);

  const updateSettings = useCallback(async () => {
    const res = await fetch(`/api/settings`, {
      method: "PUT",
      body: JSON.stringify({ version: version, faq: faq, tos: tos }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      alert("Settings updated");
      router.refresh();
    } else {
      alert("Settings failed to update");
    }
  }, [faq, router, tos, version]);

  return (
    <FormWrapper>
      <InputText
        label="Version"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
      ></InputText>
      <InputTextarea
        label="FAQ"
        value={faq}
        onChange={(e) => setFaq(e.target.value)}
      ></InputTextarea>
      <InputTextarea
        label="TOS"
        value={tos}
        onChange={(e) => setTos(e.target.value)}
      ></InputTextarea>
      <ButtonWrapper position="end">
        <Button onClick={updateSettings} size="large">
          Save
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};
