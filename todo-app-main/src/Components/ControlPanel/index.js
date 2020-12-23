import React, { useContext } from "react";
import Button from "../Button/index";
import {
  ControlPanelWrapper,
  ControlPanelColLeft,
  ControlPanelColCenter,
  ControlPanelColRight,
  ControlPanelButton,
} from "./ControlPanelElements";
import { TodosContext } from "../../contexts/TodosContext";

const ControlPanel = () => {
  const { todos, removeCompleted, setTodosList, todosList } = useContext(
    TodosContext
  );

  const buttons = [{ text: "all" }, { text: "active" }, { text: "completed" }];

  const todosLeft = todos.filter((todo) => !todo.isCompleted).length;
  return (
    <ControlPanelWrapper 
    transition={{delay: .5}} initial={{opacity: 0, y: '-100vh' }} animate={{opacity: 1, y: 0 }}
    >
      <ControlPanelColLeft>{`${todosLeft} items left`}</ControlPanelColLeft>
      <ControlPanelColCenter>
        {buttons.map((button) => {
          return (
            <ControlPanelButton
              style={{ fontWeight: 700 }}
              key={button.text}
              onClick={() => setTodosList(button.text)}
              button={button}
              todosList={todosList}
              text={button.text}
            >
              {button.text}
            </ControlPanelButton>
          );
        })}
      </ControlPanelColCenter>
      <ControlPanelColRight>
        <Button removeCompleted={removeCompleted} text={"Clear Completed"} />
      </ControlPanelColRight>
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
