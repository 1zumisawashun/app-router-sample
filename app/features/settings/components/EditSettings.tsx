"use client";
import { InputText, InputTextarea } from "@/app/components";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Settings } from "../settings.type";

type Props = {
  value: Settings;
};

const EditSettings: React.FC<Props> = ({ value }) => {
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
    <div className="flex flex-col bg-gray-100 rounded-lg relative p-5 gap-2.5">
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
      <div className="flex flex-col sm:flex-row sm:justify-end gap-2.5">
        <button
          onClick={updateSettings}
          className="inline-block bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-pink-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditSettings;
