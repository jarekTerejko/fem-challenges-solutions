import styled from "styled-components";

export const ControlPanelWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  align-items: center;
  padding: 2rem;
  background-color: var(--white);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const ControlPanelColLeft = styled.div`
  font-size: 1.6rem;
  color: var(--dark-grayish-blue);
`;

export const ControlPanelColCenter = styled.div`
  text-align: center;
`;

export const ControlPanelButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  color: var(--dark-grayish-blue);

  padding: 0.4rem 0.4rem 0.1rem 0.4rem;
  transition: 0.3s color;
  margin: 0 0.4rem;

  &:first-child {
    color: ${({ todosList }) =>
      todosList === "all" ? "var(--bright-blue)" : "var(--dark-grayish-blue)"};
  }

  &:nth-child(2) {
    color: ${({ todosList }) =>
      todosList === "active"
        ? "var(--bright-blue)"
        : "var(--dark-grayish-blue)"};
  }
  &:nth-child(3) {
    color: ${({ todosList }) =>
      todosList === "completed"
        ? "var(--bright-blue)"
        : "var(--dark-grayish-blue)"};
  }

  &:hover {
    color: var(--very-dark-grayish-blue);
  }
`;

export const ControlPanelColRight = styled.div`
  text-align: right;
`;
