import React, { useContext, useState } from "react";
import {
  TodoWrapper,
  TodoCircle,
  TodoCheckedImg,
  TodoText,
  TodoBtnRemove,
  TodoRemoveImg,
} from "./TodoElements";
import { EditingForm } from "../EditingForm";
import { TodosContext } from "../../contexts/TodosContext";

import RemoveImg from "../../images/icon-cross.svg";
import CheckedImg from "../../images/icon-check.svg";
import EditImg from "../../images/icon-edit.svg";
import { TextInputEl } from "../TextInput/TextInputElements";

const Todo = ({ todo }) => {
  const { toggleTodo, removeTodo, editTodo } = useContext(TodosContext);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.todoText);

  console.log(todo);

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    editTodo(todo.id, text);
    toggleForm();
  };

  let result;

  if (isEditing) {
    result = (
      <EditingForm onSubmit={updateTodo}>
        <TextInputEl
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
        />
      </EditingForm>
    );
  } else {
    result = (
      <TodoWrapper isEditing={isEditing}>
        <TodoCircle
          isCompleted={todo.isCompleted}
          onClick={() => toggleTodo(todo.id)}
        >
          <TodoCheckedImg src={CheckedImg} />
        </TodoCircle>
        <TodoText isCompleted={todo.isCompleted}>{todo.todoText}</TodoText>
        <TodoBtnRemove onClick={() => toggleForm()}>
          <TodoRemoveImg src={EditImg} />
        </TodoBtnRemove>
        <TodoBtnRemove onClick={() => removeTodo(todo.id)}>
          <TodoRemoveImg src={RemoveImg} />
        </TodoBtnRemove>
      </TodoWrapper>
    );
  }

  return result;
};

export default Todo;
