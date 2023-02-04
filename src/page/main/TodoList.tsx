import React, { useCallback, useEffect, useRef, useState } from "react";
import { inputDuplicate, inputPlaceholder } from "../../config/constantList";
import { useTodoList } from "../../hook/useTodoList";
import { FilterType } from "../../type/todoType";
import TodoItem from "./component/TodoItem";
import { useThrottle } from "../../hook/useThrottle";
import {
  getLastUserInputFromLocalStorage,
  setLastUserInputToLocalStorage,
} from "../../util/localStorage";
import {
  Container,
  Form,
  Input,
  Option,
  Select,
  SubmitButton,
  UnorderedList,
} from "../../style/TodoList";

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newTodo, setNewTodo] = useState("");

  const { throttledValue } = useThrottle(newTodo, 300);

  useEffect(() => {
    const storedNewTodo = getLastUserInputFromLocalStorage();

    if (storedNewTodo) {
      setNewTodo(storedNewTodo);
    }
  }, []);

  useEffect(() => {
    setLastUserInputToLocalStorage(throttledValue);
  }, [throttledValue]);

  const {
    todoList,
    duplicateError,
    filter,
    setFilter,
    handleAddTodo,
    handleToggleTodo,
    handleRemoveTodo,
  } = useTodoList();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      handleAddTodo(newTodo);
      setNewTodo("");
      inputRef.current?.focus();
    },
    [handleAddTodo, newTodo, inputRef]
  );

  const handleFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(event.target.value as FilterType);
    },
    [setFilter]
  );

  const handleNewTodoChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodo(event.target.value);
    },
    [setNewTodo]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          maxLength={200}
          ref={inputRef}
          type="text"
          value={newTodo}
          error={duplicateError}
          placeholder={duplicateError ? inputDuplicate : inputPlaceholder}
          onChange={handleNewTodoChange}
        />
        <SubmitButton type="submit">추가</SubmitButton>
      </Form>

      <Select value={filter} onChange={handleFilter}>
        <Option value={FilterType.All}>전체</Option>
        <Option value={FilterType.Completed}>완료</Option>
        <Option value={FilterType.Ing}>진행중</Option>
      </Select>

      <UnorderedList>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChangeToggle={handleToggleTodo}
            onClickRemove={handleRemoveTodo}
          />
        ))}
      </UnorderedList>
    </Container>
  );
};

export default Main;
