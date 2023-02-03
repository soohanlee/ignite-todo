import { Todo } from "../type/todoType";

export const setTodoListToLocalStorage = (todoList: Todo[]) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

export const getTodoListFromLocalStorage = (): Todo[] => {
  const todoList = localStorage.getItem("todoList");

  return todoList ? JSON.parse(todoList) : [];
};

export const setLastUserInputToLocalStorage = (lastUserInput: string) => {
  localStorage.setItem("lastUserInput", lastUserInput);
};

export const getLastUserInputFromLocalStorage = (): string => {
  const lastUserInput = localStorage.getItem("lastUserInput");

  return lastUserInput ? lastUserInput : "";
};
