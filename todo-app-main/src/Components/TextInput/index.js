import React from "react";
import {TextInputWrapper, TextInputCircle, TextInputEl} from './TextInputElements'

const TextInput = () => {
  return (
      
    <TextInputWrapper>
      <TextInputCircle></TextInputCircle>
      <TextInputEl type="text" name="todo-input" id="todo-input" />
    </TextInputWrapper>
  );
};

export default TextInput;
