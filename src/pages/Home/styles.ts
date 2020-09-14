import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2em 0px 2em;
`;

export const Logo = styled.img`
  height: 80%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const LoginButton = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-size: 1.1rem;
  white-space: nowrap;
  color: #fff;
  margin: 0px 1em;
  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  margin-top: 1rem;
  font-size: 1.3rem;
  line-height: 2.2rem;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  line-height: 3.5rem;
  color: #fff;
`;

export const SignupButton = styled(Link)`
  font-family: "Rubik", sans-serif;
  white-space: nowrap;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  background: #fff;
  padding: 0.6rem;
  border-radius: 0.3rem;
`;

export const SendSingupButton = styled.button`
  font-family: "Rubik", sans-serif;
  font-size: 1.4rem;
  color: white;
  background: #61bd4f;
  border: 0;
  padding: 0.9rem 1.5rem 0.9rem 1.5rem;
  border-radius: 0.3rem;
`;

export const EmailInput = styled.input`
  margin-right: 0.4rem;
  border-radius: 0.3rem;
  font-family: "Rubik", sans-serif;
  padding-left: 3%;
  font-size: 1.2rem;
  color: #000;
  width: 22rem;
  border: 0;
`;

export const Container = styled.div`
  background: rgb(0, 121, 191);
  background: linear-gradient(
    150deg,
    rgba(0, 121, 191, 1) 39%,
    rgba(80, 103, 197, 1) 85%
  );
`;

export const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (max-width: 1200px) {
    width: 960px;
    justify-content: center;
  }
  @media (max-width: 991px) {
    width: 720px;
    margin: 5% 0px 5% 0px;
  }
  @media (max-width: 768px) {
    width: 540px;
    margin: 5% 0px 5% 0px;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 2%;

  @media (min-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 1200px) {
    width: 45%;
    padding-right: 5%;
  }
  @media (max-width: 991px) {
    width: 100%;
    padding-bottom: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 5% 0px 5% 0px;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  margin-top: 5%;
`;
