import styled from "styled-components";
import { Link } from "react-router-dom";

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f9fafc;
  @media (max-width: 641px) {
    background-color: #fff;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  @media (max-width: 641px) {
    width: 0%;
    flex: 0;
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: 180px;
`;

export const StickImage = styled.img`
  height: 30vw;
  width: 30vw;
  bottom: 0px;
  position: fixed;
  @media (max-width: 641px) {
    height: 0px;
    width: 0px;
  }
`;

export const SignupContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  min-width: 500px;
`;

export const HR = styled.hr`
  border: 1px solid #ccc;
  width: 80%;
`;

export const CompanyName = styled.h2`
  color: #0047ca;
  margin: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 25px;
  width: 100%;
  @media (max-width: 1200px) {
    width: 95%;
  }
  @media (max-width: 1038px) {
    width: 85%;
  }
  @media (max-width: 930px) {
    width: 79%;
  }
  @media (max-width: 875px) {
    width: 75%;
  }
  @media (max-width: 641px) {
    width: 100%;
  }
`;

export const Option = styled(Link)`
  color: #959da1;
  &:hover {
    text-decoration: underline;
  }
  font-size: 14px;
  margin: 0px 0px 8px 8px;
`;
