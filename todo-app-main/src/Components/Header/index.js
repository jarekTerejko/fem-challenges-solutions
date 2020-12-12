import React from "react";
import { Container } from "../Container";

import { HeaderWrapper, HeaderTitleH1 } from "./HeaderElements";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderTitleH1>Todo</HeaderTitleH1>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
