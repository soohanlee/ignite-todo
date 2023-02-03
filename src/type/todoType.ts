export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number; // timestamp
  completedAt?: number; // timestamp
}

export enum FilterType {
  All = "all",
  Ing = "ing",
  Completed = "completed",
}
