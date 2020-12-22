import React, { useContext } from "react";
import { InfoP } from "./InfoElement";
import { TodosContext } from "../../contexts/TodosContext";

const Info = () => {
  const { todosList } = useContext(TodosContext);

  if (todosList === "all") {
    return <InfoP>Drag and drop to reorder list</InfoP>;
  } else return null;
};

export default Info;
