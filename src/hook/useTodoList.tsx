import { useEffect, useState } from "react";
import { FilterType, Todo } from "../type/todoType";
import {
  getTodoListFromLocalStorage,
  setTodoListToLocalStorage,
} from "../util/localStorage";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(
    getTodoListFromLocalStorage()
  );
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const [duplicateError, setDuplicateError] = useState(false);

  useEffect(() => {
    const storedTodoList = getTodoListFromLocalStorage();

    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  useEffect(() => {
    setTodoListToLocalStorage(todoList);
  }, [todoList]);

  const handleAddTodo = (title: string) => {
    if (title.length === 0) return;

    if (todoList.find((todo) => todo.title === title)) {
      setDuplicateError(true);

      return;
    }
    setDuplicateError(false);

    const newTodo: Todo = {
      id: title,
      title,
      completed: false,
      createdAt: Date.now(),
    };
    setTodoList([newTodo, ...todoList]);
  };

  useEffect(() => {
    const sortedList = [...todoList];
    switch (filter) {
      case "completed":
        sortedList
          .sort((a, b) => (a.completedAt || 0) - (b.completedAt || 0))
          .reverse();
        break;
      case "ing":
        sortedList.sort((a, b) => a.createdAt - b.createdAt).reverse();
        break;
      default:
        sortedList.sort((a, b) => a.createdAt - b.createdAt).reverse();
        break;
    }
    setTodoList(sortedList);
  }, [filter, todoList]);

  const handleToggleTodo = (id: string) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            completedAt: !todo.completed ? Date.now() : undefined,
          };
        }
        return todo;
      })
    );
  };

  const handleRemoveTodo = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const filteredTodoList = todoList.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "ing") return !todo.completed;
    return true;
  });

  return {
    todoList: filteredTodoList,
    duplicateError,
    filter,
    setFilter,
    handleAddTodo,
    handleToggleTodo,
    handleRemoveTodo,
    setTodoList,
  };
};
