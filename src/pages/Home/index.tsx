import React, { useState } from "react";

import {
  Container,
  Header,
  Logo,
  SignupButton,
  LoginButton,
  ImageContainer,
  Text,
  Title,
  TextContainer,
  Image,
  EmailContainer,
  EmailInput,
  Screen,
  SendSingupButton,
  BodyConteiner,
} from "./styles";

const Home: React.FC = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  return (
    <Container>
      <Header>
        <Logo src={"/images/logo-transparente.png"} alt="logo" />
        <div>
          <LoginButton to="/login">Fazer Login</LoginButton>
          <SignupButton to="/signup">Cadastrar-se</SignupButton>
        </div>
      </Header>
      <Screen>
        <BodyConteiner>
          <TextContainer>
            <Title>
              Esse projeto foi feito para treinar minhas habilidades com o
              typescript!
            </Title>
            <Text>
              Mas também foi feito para ficar no meu perfil no Github :) Mas
              também foi feito para ficar no meu perfil no Github :)
            </Text>
          </TextContainer>
          <ImageContainer>
            <Image src="/images/home-image.svg" />
          </ImageContainer>
          <EmailContainer>
            <EmailInput
              placeholder="Email"
              value={emailInput}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmailInput(e.target.value)
              }
            />
            <SendSingupButton>Cadastre-se, é grátis!</SendSingupButton>
          </EmailContainer>
        </BodyConteiner>
      </Screen>
    </Container>
  );
};

export default Home;
