export interface IColumn {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface ITask {
  id: string;
  content: string;
}

export interface ITaskProps {
  task: ITask;
  index: number;
}

export interface IColumnProps {
  column: IColumn;
  index: number;
}
