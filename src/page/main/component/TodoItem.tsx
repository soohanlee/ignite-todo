import dayjs from "dayjs";
import React from "react";
import styled, { css } from "styled-components";
import { dayjsFormat } from "../../../config/constantList";
import { Todo } from "../../../type/todoType";

interface Props {
  todo: Todo;
  onChangeToggle: (id: string) => void;
  onClickRemove: (id: string) => void;
}

const TodoItem = ({ todo, onChangeToggle, onClickRemove }: Props) => {
  const handleClickRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onClickRemove(todo.id);
  };

  const renderTodoDay = () => {
    if (todo.completed) {
      return `${dayjs(todo.completedAt).format(dayjsFormat)}`;
    }

    return `${dayjs(todo.createdAt).format(dayjsFormat)}`;
  };

  return (
    <TodoItemLi
      checked={todo.completed}
      onClick={() => onChangeToggle(todo.id)}
    >
      <TodoTitle>
        {todo.title} - {renderTodoDay()}
      </TodoTitle>

      <TodoItemButton onClick={handleClickRemove}>삭제</TodoItemButton>
    </TodoItemLi>
  );
};

export default TodoItem;

const TodoItemLi = styled.li<{ checked: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  cursor: pointer;
  ${(props) =>
    props.checked &&
    css`
      background-color: ${({ theme }) => theme.colors.cornflowerblue};
      > p {
      }
    `}

  :active {
    transform: translateY(0);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    :hover {
      transform: translateY(-5px);
    }
  }
`;

const TodoTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  width: 100%;
`;

const TodoItemButton = styled.button`
  padding: 5px 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  word-break: keep-all;

  :hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: fit-content;
    width: 100%;
  }
`;
