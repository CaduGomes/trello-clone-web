import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: #f9fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 0.2em;
  padding: 2%;
`;

export const Logo = styled.img`
  height: 60px;
  width: 180px;
`;

export const Input = styled.input`
  width: 320px;
  height: 44px;
`;

export const Title = styled.p`
  color: #5e6c84;
`;

export const LoginButton = styled.button`
  background: #61bd4f;
`;

export const OtherOption = styled(Link)`
  color: #0052d6;
  &::hover {
    text-decoration: underline;
  }
`;
