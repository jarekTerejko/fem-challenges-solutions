import React, { useContext } from "react";
import { ThemeControlBtn, ThemeControlImg } from "./ThemeControlElements";
import SunImg from "../../images/icon-sun.svg";
import MoonImg from "../../images/icon-moon.svg";
import { TodosContext } from "../../contexts/TodosContext";

const ThemeControl = () => {
  const { activeTheme, changeTheme } = useContext(TodosContext);

  return (
    <ThemeControlBtn onClick={changeTheme}>
      <ThemeControlImg
        src={activeTheme === "light" ? `${MoonImg}` : `${SunImg}`}
      />
    </ThemeControlBtn>
  );
};

export default ThemeControl;
