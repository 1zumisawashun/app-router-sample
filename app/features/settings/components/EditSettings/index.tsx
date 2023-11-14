"use client";
import {
  Button,
  ButtonWrapper,
  InputText,
  InputTextarea,
} from "@/app/components";
import { Settings } from "@/app/features/settings/settings.type";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import styles from "./styles.module.scss";

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
    <div className={styles["edit-settings-container"]}>
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
      <ButtonWrapper>
        <Button onClick={updateSettings} size="large">
          Save
        </Button>
      </ButtonWrapper>
    </div>
  );
};