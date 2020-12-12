import React, { useState, createContext, useEffect } from "react";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
