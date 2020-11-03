import React from "react";
import { Container } from "./styles";
import { ITaskProps } from "../../types";
import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }: ITaskProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        console.log(snapshot.isDragging);
        return (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Container isDragging={snapshot.isDragging}>
              {task.content}
            </Container>
          </div>
        );
      }}
    </Draggable>
  );
}

export default Task;
