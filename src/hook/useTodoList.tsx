import { useEffect, useState } from "react";
import { Todo } from "../type/todoType";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [duplicateError, setDuplicateError] = useState(false);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");

    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddTodo = (title: string) => {
    if (todoList.find((todo) => todo.title === title)) {
      setDuplicateError(true);
      return;
    }
    setDuplicateError(false);

    const newTodo: Todo = {
      id: todoList.length + 1,
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            completedAt: todo.completed ? new Date() : undefined,
          };
        }
        return todo;
      })
    );
  };

  const handleRemoveTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return {
    todoList,
    duplicateError,
    handleAddTodo,
    handleToggleTodo,
    handleRemoveTodo,
  };
};
