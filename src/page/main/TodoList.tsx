import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { inputDuplicate, inputPlaceholder } from "../../config/constantList";
import { useTodoList } from "../../hook/useTodoList";
import { FilterType } from "../../type/todoType";
import TodoItem from "./component/TodoItem";
import dayjs from "dayjs";

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<FilterType>(FilterType.All);

  const {
    todoList,
    duplicateError,
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

  const filteredTodoList = todoList.filter((todo) => {
    if (filter === FilterType.Completed) {
      return todo.completed;
    } else if (filter === FilterType.Ing) {
      return !todo.completed;
    }

    return todo;
  });

  const sortedTodoList = filteredTodoList.sort((a, b) => {
    return dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf();
  });

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

      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value as FilterType)}
      >
        <option value={FilterType.All}>전체</option>
        <option value={FilterType.Completed}>완료</option>
        <option value={FilterType.Ing}>진행중</option>
      </Select>

      <UnorderedList>
        {filteredTodoList.map((todo) => (
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
  padding: 3rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
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
  background-color: cornflowerblue;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
  width: 100%;
  max-width: max-content;
`;

const Select = styled.select`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: none;
  border-radius: 5px;
  margin-left: auto;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
`;
