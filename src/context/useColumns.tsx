import React, { useContext, createContext, useState } from "react";
import { IColumns } from "../types";

interface ColumnsContextType {
  columnsOrder: string[];
  setColumnsOrder: (value: string[]) => void;
  columns: IColumns;
  setColumns: (value: IColumns) => void;
}

const initialColumnsOrders = ["column-0", "column-1"];

const initialColumns: IColumns = {
  "column-0": {
    id: "column-0",
    title: "To do",
    tasks: [],
  },
  "column-1": {
    id: "column-1",
    title: "To do 1",
    tasks: [
      "task-0",
      "task-1",
      "task-2",
      "task-3",
      "task-4",
      "task-5",
      "task-6",
      "task-7",
      "task-8",
      "task-9",
      "task-10",
      "task-11",
    ],
  },
};

type Props = {
  children: React.ReactNode;
};

const ColumnsContext = createContext<ColumnsContextType>({
  columnsOrder: initialColumnsOrders,
  setColumnsOrder: () => {},
  columns: initialColumns,
  setColumns: () => {},
});

export const ColumnsProvider = ({ children }: Props) => {
  const [columnsOrder, setColumnsOrder] = useState(initialColumnsOrders);
  const [columns, setColumns] = useState(initialColumns);
  return (
    <ColumnsContext.Provider
      value={{ columnsOrder, setColumnsOrder, columns, setColumns }}
    >
      {children}
    </ColumnsContext.Provider>
  );
};

export const useColumns = () => useContext(ColumnsContext);
