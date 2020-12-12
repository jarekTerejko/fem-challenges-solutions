import styled from "styled-components";

export const TextInputWrapper = styled.form`
  margin-top: -15rem;
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 20px;
  background-color: var(--white);
`;

export const TextInputCircle = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  border: solid 0.2rem;
  border-color: var(--very-light-grayish-blue);
`;

export const TextInputEl = styled.input`
  border: none;
  background: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.8rem;
  display: block;
  width: 100%;
`;
