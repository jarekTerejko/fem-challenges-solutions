import React, { useContext } from "react";
import { ThemeControlBtn, ThemeControlImg } from "./ThemeControlElements";
import SunImg from "../../images/icon-sun.svg";
import MoonImg from "../../images/icon-moon.svg";
import { TodosContext } from "../../contexts/TodosContext";

const ThemeControl = () => {
  const { activeTheme, changeTheme } = useContext(TodosContext);

  return (
    <ThemeControlBtn onClick={changeTheme} type="button">
      <ThemeControlImg
        src={activeTheme === "light" ? `${MoonImg}` : `${SunImg}`}
        alt={activeTheme === "light" ? "moon" : "sun"}
      />
    </ThemeControlBtn>
  );
};

export default ThemeControl;
