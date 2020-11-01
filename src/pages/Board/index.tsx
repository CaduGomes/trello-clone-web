import React, { useState } from "react";
import { HeaderContainer, Screen, BoardContainer } from "./styled";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Column from "../../components/Column/index";
import { IColumn } from "../../types";

const initialData: IColumn[] = [
  {
    id: "column-1",
    title: "To do",
    tasks: [
      { id: "task-1", content: "teste1" },
      { id: "task-2", content: "teste2" },
      { id: "task-3", content: "teste3" },
    ],
  },

];

function Board() {
  const [columns, setColumns] = useState(initialData);

  function onDragEnd(result: DropResult) {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "task") {
      const columnSource = columns.filter(
        (column) => column.id === source.droppableId
      )[0];

      const columnDestination = columns.filter(
        (column) => column.id === destination.droppableId
      )[0];

      const draggedTask = columnSource.tasks[source.index];

      if (destination.droppableId === source.droppableId) {
        let newTasks = columnSource.tasks.filter(
          (task) => task.id !== draggedTask.id
        );

        newTasks.splice(destination.index, 0, draggedTask);

        const newColumn = {
          ...columnSource,
          tasks: newTasks,
        };

        const newColumns = columns.map((column) => {
          let obj = column;
          if (obj.id === newColumn.id) {
            obj = newColumn;
          }
          return obj;
        });

        setColumns(newColumns);
      } else if (destination.droppableId !== source.droppableId) {
        const newTasksSource = columnSource.tasks.filter(
          (task) => task.id !== draggedTask.id
        );

        let newTasksDestination = columnDestination.tasks;

        newTasksDestination.splice(destination.index, 0, draggedTask);

        const newColumnSource = {
          ...columnSource,
          tasks: newTasksSource,
        };

        const newColumnDestination = {
          ...columnDestination,
          tasks: newTasksDestination,
        };

        const newColumns = columns.map((column) => {
          let obj = column;
          if (obj.id === newColumnSource.id) {
            obj = newColumnSource;
          }
          if (obj.id === newColumnDestination.id) {
            obj = newColumnDestination;
          }
          return obj;
        });

        setColumns(newColumns);
      }
    } else if (type === "column") {
      const newColumns = columns;

      const draggedColumn = newColumns[source.index];

      newColumns.splice(source.index, 1);

      newColumns.splice(destination.index, 0, draggedColumn);

      setColumns(newColumns);
    }
  }

  return (
    <Screen>
      <HeaderContainer></HeaderContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <BoardContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columns.map((column, index) => (
                <Column key={column?.id} column={column} index={index} />
              ))}
              {provided.placeholder}
            </BoardContainer>
          )}
        </Droppable>
      </DragDropContext>
    </Screen>
  );
}

export default Board;
