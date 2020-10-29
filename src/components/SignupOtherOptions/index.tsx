import React from "react";
import { Text, ButtonContainer, Icon, Container, Title } from "./styles";

const SignupOtherOptions = () => {
  return (
    <Container>
      <Title>OU</Title>
      <ButtonContainer to="/">
        <Icon src="/images/google-icon.svg" />
        <Text>Continuar com o Google</Text>
      </ButtonContainer>
      <ButtonContainer to="/">
        <Icon src="/images/microsoft-icon.svg" />
        <Text>Continuar com a conta da Microsoft</Text>
      </ButtonContainer>
      <ButtonContainer to="/">
        <Icon src="/images/apple-icon.svg" />
        <Text>Continuar com a conta da Apple</Text>
      </ButtonContainer>
    </Container>
  );
};

export default SignupOtherOptions;
