import styled from "styled-components";
import { IPropsWithDragging } from "../../types";

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<IPropsWithDragging>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 0px 15px 5px;
  background-color: #ebecf0;
  width: 250px;
  height: fit-content;
  border-radius: 4px;
  overflow: hidden;
  padding: 10px;
  transform: ${(props) => (props.isDragging ? `rotate(5deg)` : "")};
`;

export const TaskContainer = styled.div<ContainerProps>`
  max-height: ${(props) => (props.isVisible ? `400px` : "320px")};
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const ProviderContainer = styled.div`
  display: flex;
  max-width: 250px;
  flex: 1;
  margin-right: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
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

export const AddTaskButton = styled.button`
  border: 0px;
  border-radius: 3px;
  padding: 5px;
  &:hover {
    background-color: #dadbe2;
  }
`;

export const AddColumnContainer = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;
  width: 250px;
  border-radius: 3px;
  height: auto;
`;

export const InputAddColumn = styled.textarea`
  background-color: #fff;
  border: 0px;
  border-radius: 4px;
  margin: 5px 0px 5px 0px;
  padding: 10px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);
  -moz-box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);
  box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);
  width: 100%;
  min-height: 65px;
  padding-left: 3%;
`;

export const AddColumnButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const AddColumnButton = styled.button`
  border: 0px;
  border-radius: 3px;
  color: #fff;
  padding: 7px;
  background-color: #5aac44;
  &:hover {
    background-color: #61bd4f;
  }
`;

export const CloseAddColumnIcon = styled.img`
  height: 20px;
  margin-left: 10px;
  width: 20px;
`;
