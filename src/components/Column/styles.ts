import styled from "styled-components";

export const Container = styled.div`
  background-color: #ebecf0;
  margin: 5px 0px 15px 5px;
  width: 250px;
  max-height: 400px;
  border-radius: 4px;
  padding: 10px;
`;

export const TaskContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  width: 38;
  height: 38;
  fill: #808a9d;
`

export const Title = styled.p`
  font-size: 14px;
  margin: 5px;
`;
