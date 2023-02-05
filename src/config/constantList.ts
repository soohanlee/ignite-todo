import { FilterType, IFilter } from "../type/todoType";

export const inputPlaceholder = "해야 할 일을 입력하세요";
export const inputDuplicate = "이미 존재하는 할 일입니다";

export const dayjsFormat = "YYYY-MM-DD HH:mm:ss";

export const options: Array<IFilter> = [
  { value: FilterType.All, label: "전체" },
  { value: FilterType.Completed, label: "완료" },
  { value: FilterType.Ing, label: "진행중" },
];
