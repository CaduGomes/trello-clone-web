import React from "react";
import {
  Screen,
  SignupContainer,
  ImageContainer,
  StickImage,
  Logo,
  HR,
  CompanyName,
  Option,
  OptionsContainer,
} from "./styles";
import LanguageSelect from "../../components/LanguageSelector/index";
import SignupForm from "../../components/SignupForm/index";

const SignUp: React.FC = () => {
  return (
    <Screen>
      <ImageContainer>
        <StickImage src="/images/signup-left-image.svg" />
      </ImageContainer>
      <SignupContainer>
        <Logo alt="img" src={"/images/logo-azul-transparente.png"} />
        <SignupForm />
        <LanguageSelect />
        <HR />
        <CompanyName>Cadu Gomes</CompanyName>
        <OptionsContainer>
          <Option to="/">Modelos</Option>
          <Option to="/">Preços</Option>
          <Option to="/">Aplicativos</Option>
          <Option to="/">Vagas</Option>
          <Option to="/">Blog</Option>
          <Option to="/">Desenvolvedores</Option>
          <Option to="/">Sobre</Option>
          <Option to="/">Ajuda</Option>
          <Option to="/">Configurações de cookies</Option>
        </OptionsContainer>
      </SignupContainer>
      <ImageContainer>
        <StickImage src="/images/signup-right-image.svg" />
      </ImageContainer>
    </Screen>
  );
};

export default SignUp;
