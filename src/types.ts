export interface IColumn {
  id: string;
  title: string;
  tasks: string[];
}

export interface IColumns {
  [key: string]: IColumn;
}

export interface ITask {
  id: string;
  content: string;
}

export interface ITasks {
  [key: string]: ITask;
}

export interface ITaskProps {
  task: ITask;
  index: number;
}

export interface IColumnProps {
  column: IColumn;
  tasks: ITask[];
  index: number;
}

export interface IPropsWithDragging {
  readonly isDragging: boolean;
}
