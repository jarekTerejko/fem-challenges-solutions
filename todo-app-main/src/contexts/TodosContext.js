import React, { useState, createContext, useEffect } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [todosToRender, setTodosToRender] = useState(todos);

  const addTodo = (todoText) => {
    setTodos([
      ...todos,
      {
        isCompleted: false,
        todoText: todoText.trim(),
        id: new Date().getTime(),
      },
    ]);
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, addTodo, todosToRender }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
