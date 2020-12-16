import React from "react";
import { ButtonStyled } from "./ButtonElement";

const Button = ({ text, removeCompleted }) => {
  return <ButtonStyled onClick={removeCompleted}>{text}</ButtonStyled>;
};

export default Button;
