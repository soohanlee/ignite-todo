import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { inputDuplicate, inputPlaceholder } from "../../config/constantList";
import { useTodoList } from "../../hook/useTodoList";
import { FilterType } from "../../type/todoType";
import TodoItem from "./component/TodoItem";
import { useThrottle } from "../../hook/useThrottle";
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleAddTodo(newTodo);
    setNewTodo("");
    inputRef.current?.focus();
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as FilterType);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          value={newTodo}
          error={duplicateError}
          placeholder={duplicateError ? inputDuplicate : inputPlaceholder}
          onChange={(event) => setNewTodo(event.target.value)}
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

const Container = styled.div`
  padding: 3rem 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  margin-right: 1rem;
  :focus {
    outline: none;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
      &::placeholder {
        color: red;
      }
    `}
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.cornflowerblue};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
  width: 100%;
  max-width: max-content;
`;

const Select = styled.select`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  outline: none;
  appearance: none;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  margin-bottom: 1rem;
  cursor: pointer;

  &:focus {
    border-color: ${({ theme }) => theme.colors.cornflowerblue};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

const Option = styled.option`
  background: ${({ theme }) => theme.colors.white};
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkGray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const UnorderedList = styled.ul`
  overflow: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 80%;
  padding: 1rem 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
