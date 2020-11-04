import styled from "styled-components";
import { IPropsWithDragging } from "../../types";

export const Container = styled.div<IPropsWithDragging>`
  margin: 5px 0px 15px 5px;
  background-color: #ebecf0;
  width: 250px;
  height: fit-content;
  border-radius: 4px;
  padding: 10px;
  transform: ${(props) => (props.isDragging ? `rotate(5deg)` : "")};
`;

export const TaskContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

export const ProviderContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 250px;
  margin: 3px;
`;

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
`;

export const Title = styled.p`
  font-size: 14px;
  margin: 5px;
`;
