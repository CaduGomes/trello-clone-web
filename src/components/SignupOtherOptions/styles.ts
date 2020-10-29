import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #42526e;
  width: 80%;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.57);
  -moz-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.57);
  box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.57);
`;

export const Text = styled.h5``;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const Title = styled.p`
  color: #97a0af;
  font-size: 11px;
`;
