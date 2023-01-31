import dayjs from "dayjs";
import React from "react";
import styled, { css } from "styled-components";
import { Todo } from "../../../type/todoType";

interface Props {
  todo: Todo;
  onChangeToggle: (id: number) => void;
  onClickRemove: (id: number) => void;
}

const TodoItem = ({ todo, onChangeToggle, onClickRemove }: Props) => {
  const handleClickRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onClickRemove(todo.id);
  };

  return (
    <TodoItemLi
      checked={todo.completed}
      onClick={() => onChangeToggle(todo.id)}
    >
      <TodoTitle>
        {todo.title} - {dayjs(todo.createdAt).format("YYYY.MM.DD HH:mm:ss")}
      </TodoTitle>

      <TodoItemButton onClick={handleClickRemove}>Remove Todo</TodoItemButton>
    </TodoItemLi>
  );
};

export default TodoItem;

const TodoItemLi = styled.li<{ checked: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  cursor: pointer;
  ${(props) =>
    props.checked &&
    css`
      background-color: ${({ theme }) => theme.colors.lightGray};
    `}

  :hover {
    transform: translateY(-5px);
  }
`;

const TodoTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const TodoItemButton = styled.button`
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  margin-left: auto;
`;
