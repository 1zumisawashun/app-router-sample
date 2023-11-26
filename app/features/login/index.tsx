"use client";
import { Button, FlexWrapper, FormWrapper, InputText } from "@/components";
import { useState } from "react";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormWrapper>
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
      <FlexWrapper position="center">
        <Button onClick={() => null}>Login</Button>
      </FlexWrapper>
    </FormWrapper>
  );
};
