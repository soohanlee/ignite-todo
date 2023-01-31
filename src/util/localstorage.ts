import { Todo } from "../type/todoType";

export const setTodoList = (todoList: Todo[]) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

export const getTodoList = (): Todo[] => {
  const todoList = localStorage.getItem("todoList");

  return todoList ? JSON.parse(todoList) : [];
};

export const setLastUserInput = (lastUserInput: string) => {
  localStorage.setItem("lastUserInput", lastUserInput);
};

export const getLastUserInput = (): string => {
  const lastUserInput = localStorage.getItem("lastUserInput");

  return lastUserInput ? lastUserInput : "";
};
