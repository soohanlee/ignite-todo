import dayjs from "dayjs";
import React, { useCallback } from "react";
import styled from "styled-components";
import { dayjsFormat } from "../../../config/constantList";
import { Todo } from "../../../type/todoType";
import {
  CheckBoxInput,
  Date,
  Label,
  Title,
  TodoItemButton,
  TodoItemLi,
  TodoTitle,
} from "../../../style/TodoItem";

interface Props {
  todo: Todo;
  onChangeToggle: (id: string) => void;
  onClickRemove: (id: string) => void;
}

const TodoItem = ({ todo, onChangeToggle, onClickRemove }: Props) => {
  const handleClickRemove = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      onClickRemove(todo.id);
    },
    [todo.id, onClickRemove]
  );

  const renderTodoDay = () => {
    if (todo.completed) {
      return `${dayjs(todo.completedAt).format(dayjsFormat)}`;
    }

    return `${dayjs(todo.createdAt).format(dayjsFormat)}`;
  };

  const handleChangeToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();

      onChangeToggle(todo.id);
    },
    [todo.id, onChangeToggle]
  );

  return (
    <TodoItemLi data-cy="todo-item" checked={todo.completed}>
      <CheckBoxInput
        onChange={handleChangeToggle}
        checked={todo.completed}
        type="checkbox"
        id={todo.id}
        data-cy="todo-item-checkbox"
      />
      <Label htmlFor={todo.id} />

      <TodoTitle>
        <Title data-cy="title">{todo.title}</Title>
        <Date data-cy="date">{renderTodoDay()}</Date>
      </TodoTitle>

      <CustomButton data-cy="remove-button" onClick={handleClickRemove}>
        Edit
      </CustomButton>
      <TodoItemButton data-cy="remove-button" onClick={handleClickRemove}>
        Delete
      </TodoItemButton>
    </TodoItemLi>
  );
};

export default TodoItem;

const CustomButton = styled(TodoItemButton)`
  margin-right: 1rem;
`;
