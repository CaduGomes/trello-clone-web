import React, { useState } from "react";
import {
  FormContainer,
  SignupContainer,
  Title,
  FormInput,
  ServicesTextContainer,
  ServicesText,
  ServicesBlueText,
  SignupButton,
} from "./styles";
import { useAuth } from "../../context/useAuth";
import { useHistory } from "react-router-dom";

import SignupOtherOptionsButtons from "../SignupOtherOptions/index";

const SignupFrom: React.FC = () => {
  const { setAuth } = useAuth();
  const history = useHistory();
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const signupHandler = () => {
    setAuth({
      email: emailInput,
      logged: true,
      name: nameInput,
      token: "1212121221",
    });
    history.push("/dashboard");
  };
  return (
    <SignupContainer>
      <Title>Criar a sua conta</Title>
      <FormContainer>
        <FormInput
          placeholder="Digitar endereço de e-mail"
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.currentTarget.value)}
        />
        <FormInput
          placeholder="Digitar nome completo"
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.currentTarget.value)}
        />
        <FormInput
          placeholder="Criar senha"
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.currentTarget.value)}
        />
        <ServicesTextContainer>
          <div>
            <ServicesText>
              Ao me inscrever, aceito os{" "}
              <ServicesBlueText>
                Termos de serviço do Atlassian Cloud{" "}
              </ServicesBlueText>
              e concordo com a{" "}
              <ServicesBlueText>Política de Privacidade</ServicesBlueText>.
            </ServicesText>
          </div>
        </ServicesTextContainer>
        <SignupButton
          type="submit"
          onClick={signupHandler}
          value={"Registre-se"}
        />
      </FormContainer>
      <SignupOtherOptionsButtons />
    </SignupContainer>
  );
};

export default SignupFrom;
