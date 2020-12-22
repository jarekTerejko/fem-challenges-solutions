import React from "react";
import { Container } from "./Components/Container";
import ControlPanel from "./Components/ControlPanel";
import Header from "./Components/Header";
import Info from "./Components/Info";
import TextInput from "./Components/TextInput";
import TodoList from "./Components/TodoList";
import TodosContextProvider from "./contexts/TodosContext";

const App = () => {
  return (
    <TodosContextProvider>
      <Header />
      <Container>
        <TextInput />
        <TodoList />
        <ControlPanel />
      </Container>
      <Info />
    </TodosContextProvider>
  );
};

export default App;
