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
  ProviderContainer,
} from "./styles";

function Column({ column, index, tasks }: IColumnProps) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <ProviderContainer
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={column.id} type="task">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ display: "flex", flex: 1 }}
              >
                <Container isDragging={snapshot.isDragging}>
                  <Header>
                    <Title>{column.title}</Title>
                    <p>...</p>
                  </Header>
                  <TaskContainer>
                    {tasks.map((task, index) => (
                      <Task key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskContainer>
                  <Footer></Footer>
                </Container>
              </div>
            )}
          </Droppable>
        </ProviderContainer>
      )}
    </Draggable>
  );
}

export default Column;
