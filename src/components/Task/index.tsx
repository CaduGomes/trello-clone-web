import React from "react";
import { Container } from "./styles";
import { ITaskProps } from "../../types";
import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }: ITaskProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Container
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
