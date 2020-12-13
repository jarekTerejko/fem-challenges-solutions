import React, { useContext } from "react";
import {
  TodoWrapper,
  TodoCircle,
  TodoCheckedImg,
  TodoText,
  TodoBtnRemove,
  TodoRemoveImg,
} from "./TodoElements";
import { TodosContext } from "../../contexts/TodosContext";

import RemoveImg from "../../images/icon-cross.svg";
import CheckedImg from "../../images/icon-check.svg";

const Todo = ({ todo }) => {
  const { toggleTodo } = useContext(TodosContext);

  console.log(todo);
  return (
    <TodoWrapper>
      <TodoCircle
        isCompleted={todo.isCompleted}
        onClick={() => toggleTodo(todo.id)}
      >
        <TodoCheckedImg src={CheckedImg} />
      </TodoCircle>
      <TodoText>{todo.todoText}</TodoText>
      <TodoBtnRemove>
        <TodoRemoveImg src={RemoveImg} />
      </TodoBtnRemove>
    </TodoWrapper>
  );
};

export default Todo;
