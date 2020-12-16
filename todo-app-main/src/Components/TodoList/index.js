import React, { useContext } from "react";
import { TodoListWrapper } from "./TodoListElements";
import Todo from "../Todo/index";
import { TodosContext } from "../../contexts/TodosContext";

const TodoList = () => {
  const { todos, todosList } = useContext(TodosContext);
  let list = null;

  const renderList = () => {
    if (todosList === "all") {
      list = todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      });
    }

    if (todosList === "active") {
      list = todos
        .filter((todo) => !todo.isCompleted)
        .map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        });
    }

    if (todosList === "completed") {
      list = todos
        .filter((todo) => todo.isCompleted)
        .map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        });
    }
    return list;
  };

  return <TodoListWrapper>{renderList()}</TodoListWrapper>;
};

export default TodoList;
