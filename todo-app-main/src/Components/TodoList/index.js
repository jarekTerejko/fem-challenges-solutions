import React, { useContext } from "react";
import { TodoListWrapper } from "./TodoListElements";
import Todo from "../Todo/index";
import { TodosContext } from "../../contexts/TodosContext";

const TodoList = () => {
  const { todosToRender } = useContext(TodosContext);

  return (
    <TodoListWrapper>
      {todosToRender.length > 0
        ? todosToRender.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })
        : null}
    </TodoListWrapper>
  );
};

export default TodoList;
