import styled from "styled-components";
import { IPropsWithDragging } from "../../types";

export const Container = styled.div<IPropsWithDragging>`
  background-color: #fff;
  font-size: 13px;
  word-wrap: break-word;
  border-radius: 4px;
  margin: 5px 0px 5px 0px;
  padding: 10px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);
  -moz-box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);
  box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);
  transform: ${(props) => (props.isDragging ? `rotate(5deg)` : "")};
`;
