import styled from "styled-components";

export const ControlPanelWrapper = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr 160px;
  align-items: center;
  background-color: var(--very-light-gray);

  @media (max-width: 620px) {
    grid-template-columns: 1fr 1fr;
    position: relative;
    align-items: unset;
  }
`;

export const ControlPanelColLeft = styled.div`
  font-size: 1.6rem;
  color: var(--dark-grayish-blue);
  background-color: var(--white);
  padding: 2rem;
  border-bottom-left-radius: 0.5rem;

  @media (max-width: 620px) {
    font-size: 1.2rem;
  }
`;

export const ControlPanelColCenter = styled.div`
  text-align: center;
  background-color: var(--white);
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 620px) {
    grid-column: 1/3;
    grid-row: 2/3;
    margin-top: 4rem;
    height: unset;
    padding: 2rem;
    border-radius: 0.5rem;
    padding: 1.4rem 2rem;
  }
`;

export const ControlPanelButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.6rem;
  color: var(--dark-grayish-blue);
  text-transform: capitalize;
  padding: 0.4rem 0.4rem 0.1rem 0.4rem;
  transition: 0.3s color;
  margin: 0 0.4rem;
  outline: none;

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
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  border-bottom-right-radius: 0.5rem;
  height: 100%;
  padding-right: 1.2rem;
`;
