import React, { useState, useEffect, useRef } from "react";
import {
  HeaderContainer,
  Screen,
  AddColumnOpenButton,
  AddColumnContainer,
  InputAddColumn,
  AddColumnButton,
  CloseAddColumnIcon,
  AddColumnButtonContainer,
} from "./styled";
import StickyBox from "react-sticky-box";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import ColumnComponent from "../../components/Column/index";
import { useColumns } from "../../context/useColumns";

function Board() {
  const { columns, setColumns, setColumnsOrder, columnsOrder } = useColumns();
  const [addVisibleColumnButton, setAddVisibleColumnButton] = useState(false);
  const [addColumnText, setAddColumnText] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      if (
        !(wrapperRef.current! as any)?.contains(e.target) &&
        addVisibleColumnButton
      ) {
        setAddVisibleColumnButton(false); 
      }
    };

    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [addVisibleColumnButton]);

  function onDragEnd(result: DropResult) {
    const { source, destination, draggableId, type } = result;

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
      const finish = columns[destination.droppableId];
      const start = columns[source.droppableId];

      const newTaskIdsSource = start.tasks;
      const newTaskIdsDest = finish.tasks;

      if (destination.droppableId === source.droppableId) {
        newTaskIdsSource.splice(source.index, 1);
        newTaskIdsSource.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          tasks: newTaskIdsSource,
        };

        setColumns({
          ...columns,
          [newColumn.id]: newColumn,
        });
      } else if (destination.droppableId !== source.droppableId) {
        newTaskIdsSource.splice(source.index, 1);
        newTaskIdsDest.splice(destination.index, 0, draggableId);

        const newColumnDest = {
          ...finish,
          tasks: newTaskIdsDest,
        };

        const newColumnSource = {
          ...start,
          tasks: newTaskIdsSource,
        };

        setColumns({
          ...columns,
          [newColumnDest.id]: newColumnDest,
          [newColumnSource.id]: newColumnSource,
        });
      }
    } else if (type === "column") {
      const newColumnsOrder = columnsOrder;
      newColumnsOrder.splice(source.index, 1);
      newColumnsOrder.splice(destination.index, 0, draggableId);
      setColumnsOrder(newColumnsOrder);
    }
  }

  function addNewColumnHandler() {
    if (addColumnText !== "") {
      const newColumns = columns;
      const columnLength = Object.keys(columns).length;
      const newColumnKey = `column-${columnLength}`;
      console.log(newColumnKey);
      newColumns[newColumnKey] = {
        id: newColumnKey,
        title: addColumnText,
        tasks: [],
      };
      setColumns(newColumns);
      setColumnsOrder(Object.keys(newColumns));
      setAddColumnText("");
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
            <StickyBox style={{ display: "flex", flex: 1 }}>
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  overflowY: "hidden",
                }}
              >
                {columnsOrder.map((columnId, index) => {
                  const column = columns[columnId];
                  return (
                    <ColumnComponent
                      key={column.id}
                      column={column}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
                {!addVisibleColumnButton ? (
                  <AddColumnOpenButton
                    onClick={() => setAddVisibleColumnButton(true)}
                  >
                    Adicionar outra lista
                  </AddColumnOpenButton>
                ) : (
                  <AddColumnContainer
                    isVisible={addVisibleColumnButton}
                    ref={wrapperRef}
                  >
                    <InputAddColumn
                      value={addColumnText}
                      placeholder="Insira o título da lista..."
                      onChange={(e) => setAddColumnText(e.currentTarget.value)}
                    />
                    <AddColumnButtonContainer>
                      <AddColumnButton onClick={addNewColumnHandler}>
                        Adicionar Lista
                      </AddColumnButton>
                      <CloseAddColumnIcon
                        onClick={() => setAddVisibleColumnButton(false)}
                        src="/images/boardPage/cancel_icon.svg"
                      />
                    </AddColumnButtonContainer>
                  </AddColumnContainer>
                )}
              </div>
            </StickyBox>
          )}
        </Droppable>
      </DragDropContext>
    </Screen>
  );
}

export default Board;
