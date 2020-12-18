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
        <HeaderHeadingWrapper>
          <HeaderTitleH1>Todo</HeaderTitleH1>
          <ThemeControl />
        </HeaderHeadingWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
