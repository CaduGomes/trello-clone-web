import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #d29034;
`;

export const HeaderContainer = styled.div`
  height: 36px;
`;

export const AddColumnOpenButton = styled.button`
  display: flex;
  height: 35px;
  border-radius: 3px;
  font-size: 12px;
  width: 264px;
  border: 0px;
  color: #fff;
  margin-left: 5px;
  padding: 10px;
  background-color: #ddab65;
  &:hover {
    background-color: #e0b475;
  }
`;

interface ContainerProps {
  isVisible: boolean;
}

export const AddColumnContainer = styled.div<ContainerProps>`
  background-color: #ebecf0;
  width: 264px;
  border-radius: 3px;
  height: 75px;
  margin-left: 5px;
  padding: 5px;
`;

export const InputAddColumn = styled.input`
  border: 2px solid #0079bf;
  border-radius: 3px;
  width: 254px;
  height: 30px;
  padding-left: 3%;
`;

export const AddColumnButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddColumnButton = styled.button`
  border: 0px;
  border-radius: 3px;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 5px;
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
