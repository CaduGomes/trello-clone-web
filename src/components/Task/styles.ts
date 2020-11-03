import styled from "styled-components";

interface Props {
  readonly isDragging: boolean;
}

export const Container = styled.div<Props>`
  background-color: #fff;
  border-radius: 4px;
  margin: 5px 0px 5px 0px;
  padding: 10px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);
  -moz-box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);
  box-shadow: 0px 1px 2px 0px rgba(178, 185, 197, 1);

  transform: ${(props) => (props.isDragging ? `rotate(10deg)` : "")};
  /* transform: rotate(5deg); */
`;
