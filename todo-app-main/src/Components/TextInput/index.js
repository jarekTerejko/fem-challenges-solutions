import React, { useContext, useState } from "react";
import {
  TextInputWrapper,
  TextInputCircle,
  TextInputEl,
} from "./TextInputElements";
import { TodosContext } from "../../contexts/TodosContext";

const TextInput = () => {
  const { addTodo } = useContext(TodosContext);

  const [todoText, setTodoText] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <TextInputWrapper onSubmit={handleOnSubmit}>
      <TextInputCircle></TextInputCircle>
      <TextInputEl
        placeholder="Create a new todo..."
        type="text"
        value={todoText}
        name="todo-input"
        id="todo-input"
        onChange={(e) => setTodoText(e.target.value)}
      />
    </TextInputWrapper>
  );
};

export default TextInput;
