import dayjs from "dayjs";
import React, { useCallback } from "react";
import { dayjsFormat } from "../../../config/constantList";
import { Todo } from "../../../type/todoType";
import CheckOn from "../../../asset/image/check-on.png";
import CheckOff from "../../../asset/image/check-off.png";
import {
  CheckBoxImg,
  Date,
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
    (event: React.MouseEvent<HTMLLIElement>) => {
      event.preventDefault();

      onChangeToggle(todo.id);
    },
    [todo.id, onChangeToggle]
  );

  return (
    <TodoItemLi checked={todo.completed} onClick={handleChangeToggle}>
      {todo.completed ? (
        <CheckBoxImg src={CheckOn} alt="완료" />
      ) : (
        <CheckBoxImg src={CheckOff} alt="진행중" />
      )}
      <TodoTitle>
        <Title>{todo.title}</Title>
        <Date>{renderTodoDay()}</Date>
      </TodoTitle>

      <TodoItemButton onClick={handleClickRemove}>삭제</TodoItemButton>
    </TodoItemLi>
  );
};

export default TodoItem;
