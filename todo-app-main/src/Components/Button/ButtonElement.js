import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  color: var(--dark-grayish-blue);
  padding: 0.4rem 0.4rem 0.1rem 0.4rem;
  transition: 0.3s color;
  margin: 0 0.4rem;

  &:hover {
    color: var(--very-dark-grayish-blue);
  }
`;
