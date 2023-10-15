import { FilterType, IFilter } from "../type/todoType";

export const inputPlaceholder = "please input your todo";
export const inputDuplicate = "already exist";

export const dayjsFormat = "YYYY-MM-DD HH:mm:ss";

export const options: Array<IFilter> = [
  { value: FilterType.All, label: "All" },
  { value: FilterType.Ing, label: "Active" },
  { value: FilterType.Completed, label: "Completed" },
];
