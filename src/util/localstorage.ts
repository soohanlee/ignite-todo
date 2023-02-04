import { Todo } from "../type/todoType";
import { decrypt, encrypt } from "./crypto";

const secret = process.env.REACT_APP_SECRET_KEY || "ignite";

export const setTodoListToLocalStorage = (todoList: Todo[]) => {
  const stringifiedTodoList = JSON.stringify(todoList);
  const encryptedData = encrypt(stringifiedTodoList, secret);
  localStorage.setItem("todoList", encryptedData);
};

export const getTodoListFromLocalStorage = (): Todo[] => {
  const encryptedData = localStorage.getItem("todoList");
  if (!encryptedData) return [];

  const decryptedData = decrypt(encryptedData, secret);
  return JSON.parse(decryptedData);
};

export const setLastUserInputToLocalStorage = (lastUserInput: string) => {
  const encryptedData = encrypt(lastUserInput, secret);
  localStorage.setItem("lastUserInput", encryptedData);
};

export const getLastUserInputFromLocalStorage = (): string => {
  const encryptedData = localStorage.getItem("lastUserInput");
  if (!encryptedData) return "";

  const decryptedData = decrypt(encryptedData, secret);
  return decryptedData;
};
