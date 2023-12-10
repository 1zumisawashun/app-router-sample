"use client";
// import {
//   FlexWrapper,
//   FormWrapper,
//   InputFile,
//   InputText,
//   Tooltip,
// } from "@/components";
import { useRef, useState } from "react";
import Button from "../../components/buttons/Button";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* <FormWrapper>
        <Tooltip.Frame>
          <div ref={triggerRef}>これはテスト</div>
          <Tooltip.List triggerRef={triggerRef}>ToolTipList</Tooltip.List>
        </Tooltip.Frame>

        <InputText
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></InputText>
        <InputText
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputText>
        <InputFile file={file} setFile={setFile}></InputFile>
        <FlexWrapper position="center"> */}
      <Button onClick={() => null}>Login</Button>
      {/* </FlexWrapper>
      </FormWrapper> */}
    </div>
  );
};
