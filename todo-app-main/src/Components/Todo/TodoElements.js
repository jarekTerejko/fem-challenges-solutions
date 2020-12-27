import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: grid;
  grid-template-columns: 22px 1fr 22px 22px;
  gap: 20px;
  align-items: center;
  padding: 2rem;
  background-color: var(--white);
  border-bottom: solid 1px var(--very-light-grayish-blue);
  cursor: pointer;
  
  @media (max-width: 620px) {
    padding: 1.4rem 2rem;
    font-size: 1.2rem;
    gap: 10px;
  }

  &:hover :last-child {
    visibility: visible;
  }
`;

export const TodoCircle = styled.div`
  height: 2.2rem;
  width: 2.2rem;
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
    top: -1px;
    left: -1px;
    width: calc(100% + 0.2rem);
    height: calc(100% + 0.2rem);
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
    top: 1px;
    left: 1px;
    width: calc(100% - 0.2rem);
    height: calc(100% - 0.2rem);
    border-radius: 50%;
    background: var(--white);
    z-index: 0;
    pointer-events: none;
    display: ${({ isCompleted }) => (isCompleted ? "none" : "block")};
  }
`;

export const TodoCheckedImg = styled.img``;

export const TodoText = styled.p`
  color: ${({ isCompleted }) =>
    isCompleted ? "var(--light-grayish-blue)" : ""};
  text-decoration: ${({ isCompleted }) => (isCompleted ? "line-through" : "")};
`;

export const TodoBtnRemove = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.3rem 0.3rem;
  visibility: hidden;

  @media (max-width: 620px) {
    visibility: visible;
  }
`;
export const TodoRemoveImg = styled.img``;
