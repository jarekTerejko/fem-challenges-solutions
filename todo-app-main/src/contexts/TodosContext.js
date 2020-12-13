import React, { useState, createContext, useEffect } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [todosToRender, setTodosToRender] = useState(todos);

  useEffect(() => {
    setTodosToRender(todos);
    // return () => {
    //   cleanup
    // }
  }, [todos]);

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

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        todosToRender,
        toggleTodo,
        removeTodo,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
