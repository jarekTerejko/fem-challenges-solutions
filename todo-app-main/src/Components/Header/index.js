import React, { useContext } from "react";
import { Container } from "../Container";
import ThemeControl from "../ThemeControl";

import { TodosContext } from "../../contexts/TodosContext";

import {
  HeaderWrapper,
  HeaderHeadingWrapper,
  HeaderTitleH1,
} from "./HeaderElements";

const Header = () => {
  const { activeTheme } = useContext(TodosContext);
  return (
    <HeaderWrapper activeTheme={activeTheme}>
      <Container>
        <HeaderHeadingWrapper
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0.2, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <HeaderTitleH1>Todo</HeaderTitleH1>
          <ThemeControl />
        </HeaderHeadingWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
