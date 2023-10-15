import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  inputDuplicate,
  inputPlaceholder,
  options,
} from "../../config/constantList";
import { useTodoList } from "../../hook/useTodoList";
import { FilterType } from "../../type/todoType";
import TodoItem from "./component/TodoItem";
import { useThrottle } from "../../hook/useThrottle";
import {
  Container,
  Form,
  Input,
  SubmitButton,
  UnorderedList,
} from "../../style/TodoList";
import SelectComponent from "./component/Select";
import {
  getLastUserInputFromLocalStorage,
  setLastUserInputToLocalStorage,
} from "../../util/localStorage";

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
    (value: string) => {
      setFilter(value as FilterType);
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
      <Form data-cy="form" onSubmit={handleSubmit}>
        <Input
          maxLength={200}
          ref={inputRef}
          type="text"
          value={newTodo}
          error={duplicateError}
          placeholder={duplicateError ? inputDuplicate : inputPlaceholder}
          onChange={handleNewTodoChange}
          data-cy="input"
        />
        <SubmitButton type="submit" data-cy="submit-button">
          Add Todo
        </SubmitButton>
      </Form>
      <SelectComponent
        filter={filter}
        options={options}
        onChange={handleFilter}
      />
      <UnorderedList data-cy="unordered-list">
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
