import React, { useState, createContext, useEffect } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const initialData = JSON.parse(localStorage.getItem("todos")) || [];
  const initialTheme =
    JSON.parse(localStorage.getItem("activeTheme")) || "light";

  const [todos, setTodos] = useState(initialData);
  const [todosList, setTodosList] = useState("all");
  const [activeTheme, setActiveTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // return () => {
    //   cleanup
    // }
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("activeTheme", JSON.stringify(activeTheme));
    document.documentElement.setAttribute("data-theme", activeTheme);
    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line
  }, []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...todos];
    const [reorderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderItem);

    setTodos(items);
  };

  const changeTheme = () => {
    const newTheme = activeTheme === "light" ? "dark" : "light";
    setActiveTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("activeTheme", JSON.stringify(newTheme));
  };

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
        activeTheme,
        changeTheme,
        handleOnDragEnd,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
