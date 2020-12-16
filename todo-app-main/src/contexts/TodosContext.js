import React, { useState, createContext, useEffect } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const initialData = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialData);
  const [todosList, setTodosList] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
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

  const removeCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        removeTodo,
        removeCompleted,
        todosList,
        setTodosList,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
