import styled from "styled-components";
import { motion } from "framer-motion";

export const TextInputWrapper = styled(motion.form)`
  margin-top: -15rem;
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 20px;
  background-color: var(--white);
  transition: 0.3s;

  @media (max-width: 620px) {
    margin-top: -9.6rem;
    padding: 1.4rem 2rem;
    margin-bottom: 2rem;
    gap: 10px;
  }
`;

export const TextInputCircle = styled.div`
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  border: solid 0.1rem;
  border-color: var(--very-light-grayish-blue);
`;

export const TextInputEl = styled.input`
  border: none;
  background: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.8rem;
  display: block;
  width: 100%;
  color: var(--very-dark-grayish-blue);
  outline-offset: 2px;

  @media (max-width: 620px) {
    font-size: 1.4rem;
  }

  &::placeholder {
    color: var(--dark-grayish-blue);
  }
`;
