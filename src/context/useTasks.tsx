import React, { useContext, createContext, useState } from "react";
import { ITasks } from "../types";

interface TaskContextType {
  tasks: ITasks;
  setTasks: (value: ITasks) => void;
}

const initialTasks: ITasks = {
  "task-0": {
    id: "task-0",
    content: "xesquedele",
  },
  "task-1": {
    id: "task-1",
    content: "xesquedele 1",
  },
  "task-2": {
    id: "task-2",
    content: "xesquedele 2",
  },
  "task-3": {
    id: "task-3",
    content: "xesquedele 3",
  },
  "task-4": {
    id: "task-4",
    content: "xesquedele",
  },
  "task-5": {
    id: "task-5",
    content: "xesquedele 1",
  },
  "task-6": {
    id: "task-6",
    content: "xesquedele 2",
  },
  "task-7": {
    id: "task-7",
    content: "xesquedele 3",
  },
  "task-8": {
    id: "task-8",
    content: "xesquedele",
  },
  "task-9": {
    id: "task-9",
    content: "xesquedele 1",
  },
  "task-10": {
    id: "task-10",
    content: "xesquedele 2",
  },
  "task-11": {
    id: "task-11",
    content: "xesquedele 3",
  },
};

type Props = {
  children: React.ReactNode;
};

const TaskContext = createContext<TaskContextType>({
  tasks: initialTasks,
  setTasks: () => {},
});

export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);

export const useGetTaskByColumnId = (tasksIds: string[]) => {
  const { tasks } = useContext(TaskContext);
  const columnTasks = tasksIds.map((taskId) => tasks[taskId]);

  return columnTasks;
};
