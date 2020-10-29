import React from "react";

import {
  Container,
  Logo,
  LoginContainer,
  Input,
  LoginButton,
  OtherOption,
  Title,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Logo alt="img" src={"/images/logo-azul-transparente.png"} />
      <LoginContainer>
        <Title>Fazer Login no Trello</Title>
        
      </LoginContainer>
    </Container>
  );
};

export default Login;
