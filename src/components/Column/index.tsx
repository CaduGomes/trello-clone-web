import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "../Task";
import { IColumnProps } from "../../types";
import {
  Container,
  TaskContainer,
  Title,
  Header,
  Footer,
} from "./styles";

function Column({ column, index }: IColumnProps) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Header {...provided.dragHandleProps}>
            <Title>{column.title}</Title>
            <p>...</p>
          </Header>
          <Droppable droppableId={column.id} type="task">
            {(provided) => (
              <TaskContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {column.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskContainer>
            )}
          </Droppable>
          <Footer></Footer>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
