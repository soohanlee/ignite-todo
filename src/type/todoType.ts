export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

export enum FilterType {
  All = "all",
  Ing = "ing",
  Completed = "completed",
}
