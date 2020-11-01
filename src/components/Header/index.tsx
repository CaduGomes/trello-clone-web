import React from "react";
import { Container, HeaderContainer } from "./styles";

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <HeaderContainer />
      {children}
    </Container>
  );
};

export default Header;
