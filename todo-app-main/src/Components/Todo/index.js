import React from "react";
import {
  TodoWrapper,
  TodoCircle,
  TodoChecked,
  TodoCheckedImg,
  TodoText,
  TodoBtnRemove,
  TodoRemoveImg,
} from "./TodoElements";

import RemoveImg from '../../images/icon-cross.svg'
import CheckedImg from '../../images/icon-check.svg'


const Todo = () => {
  return (
    <TodoWrapper>
      <TodoCircle>
        {/* <TodoChecked></TodoChecked> */}
        <TodoCheckedImg src={CheckedImg} />
      </TodoCircle>
      <TodoText>Read for one hour</TodoText>
      <TodoBtnRemove>
        <TodoRemoveImg src={RemoveImg} />
      </TodoBtnRemove>
    </TodoWrapper>
  );
};

export default Todo;
