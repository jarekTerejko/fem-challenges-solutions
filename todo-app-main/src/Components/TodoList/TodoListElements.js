import styled from "styled-components";
import { motion } from "framer-motion";

export const TodoListWrapper = styled(motion.ul)`
  li:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background-color: var(--white);
    & > div {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  }
`;
