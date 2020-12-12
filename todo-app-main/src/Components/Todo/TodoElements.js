import styled from "styled-components";
import CheckedImg from "../../images/icon-check.svg";

export const TodoWrapper = styled.li`
  display: grid;
  grid-template-columns: 24px 1fr 30px;
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
  /* border: solid 0.2rem; */
  /* border-color: var(--very-light-grayish-blue); */
  background: var(--very-light-grayish-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  /* &:hover{
        border-color: ;
    } */

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
  }
`;
export const TodoChecked = styled.div`
  margin: auto;
  background: var(--white);
  /* background: red; */
  background-image: url(${CheckedImg});
  /* background-size: ; */
  background-repeat: no-repeat;

  z-index: 1;
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const TodoCheckedImg = styled.img``;

export const TodoText = styled.p``;

export const TodoBtnRemove = styled.button`
  border: none;
  background: none;
`;
export const TodoRemoveImg = styled.img``;
