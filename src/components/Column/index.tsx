import React, { useEffect, useRef, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "../Task";
import { IColumnProps } from "../../types";
import StickyBox from "react-sticky-box";
import {
  Container,
  TaskContainer,
  Title,
  Header,
  Footer,
  ProviderContainer,
  AddTaskButton,
  AddColumnButton,
  AddColumnButtonContainer,
  AddColumnContainer,
  CloseAddColumnIcon,
  InputAddColumn,
} from "./styles";
import { useTask, useGetTaskByColumnId } from "../../context/useTasks";
import { useColumns } from "../../context/useColumns";

function Column({ column, index }: IColumnProps) {
  const ColumnTasks = useGetTaskByColumnId(column.tasks);
  const { setTasks, tasks } = useTask();
  const { columns, setColumns } = useColumns();
  const [addVisibleTaskButton, setAddVisibleTaskButton] = useState(false);
  const [addTaskText, setAddTaskText] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      if (
        !(wrapperRef.current! as any)?.contains(e.target) &&
        addVisibleTaskButton
      ) {
        setAddVisibleTaskButton(false);
      }
    };

    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [addVisibleTaskButton]);

  function addTaskHandler(columnId: string) {
    if (addTaskText !== "") {
      const newTasks = tasks;
      const tasksLength = Object.keys(tasks).length;
      const newTaskKey = `task-${tasksLength}`;
      newTasks[newTaskKey] = {
        id: newTaskKey,
        content: addTaskText,
      };
      setTasks(newTasks);
      const addTaskToColumn = columns[columnId];
      addTaskToColumn.tasks.push(newTaskKey);
      const newColumns = columns;

      newColumns[addTaskToColumn.id] = addTaskToColumn;
      setColumns(newColumns);
      setAddTaskText("");
    }
  }

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
                  <TaskContainer isVisible={!addVisibleTaskButton}>
                    <StickyBox
                      style={{
                        overflowY: "scroll",
                      }}
                    >
                      {ColumnTasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                      ))}
                      {provided.placeholder}
                    </StickyBox>
                  </TaskContainer>
                  <Footer>
                    {!addVisibleTaskButton ? (
                      <AddTaskButton
                        onClick={() => setAddVisibleTaskButton(true)}
                      >
                        Adicionar outra lista
                      </AddTaskButton>
                    ) : (
                      <AddColumnContainer
                        isVisible={addVisibleTaskButton}
                        ref={wrapperRef}
                      >
                        <InputAddColumn
                          value={addTaskText}
                          placeholder="Insira o título para esse cartão..."
                          onChange={(e) =>
                            setAddTaskText(e.currentTarget.value)
                          }
                        />
                        <AddColumnButtonContainer>
                          <AddColumnButton
                            onClick={() => addTaskHandler(column.id)}
                          >
                            Adicionar Lista
                          </AddColumnButton>
                          <CloseAddColumnIcon
                            onClick={() => setAddVisibleTaskButton(false)}
                            src="/images/boardPage/cancel_icon.svg"
                          />
                        </AddColumnButtonContainer>
                      </AddColumnContainer>
                    )}
                  </Footer>
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
