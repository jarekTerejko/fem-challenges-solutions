import styled from "styled-components";

export const TodoWrapper = styled.li`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  gap: 20px;
  align-items: center;
  padding: 2rem;
  background-color: var(--white);
  border-bottom: solid 2px var(--very-light-grayish-blue);

  &:first-of-type {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;
export const TodoCircle = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  background-image: ${({ isCompleted }) =>
    !isCompleted
      ? `linear-gradient(var(--very-light-grayish-blue), var(--very-light-grayish-blue))`
      : `linear-gradient(
      145deg,
      hsl(192, 100%, 67%) 0%,
      hsl(280, 87%, 65%)
    )`};

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 0.4rem);
    height: calc(100% + 0.4rem);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;
    transition: 0.3s;
    background-image: linear-gradient(
      145deg,
      hsl(192, 100%, 67%) 0%,
      hsl(280, 87%, 65%)
    );
    border-radius: 50%;
    display: ${({ isCompleted }) => (isCompleted ? "none" : "block")};
  }

  &:hover::before {
    opacity: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 0.4rem);
    height: calc(100% - 0.4rem);
    border-radius: 50%;
    background: var(--white);
    z-index: 0;
    pointer-events: none;
    display: ${({ isCompleted }) => (isCompleted ? "none" : "block")};
  }
`;

export const TodoCheckedImg = styled.img``;

export const TodoText = styled.p``;

export const TodoBtnRemove = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: .3rem;
`;
export const TodoRemoveImg = styled.img``;
