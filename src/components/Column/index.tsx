import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task";
import { Container } from "./styles";
import { IColumnProps } from "../../types";

function Column({ column }: IColumnProps) {
  return (
    <Container>
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {column.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
}

export default Column;
