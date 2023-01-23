import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Button = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handlerTheme = () => {
		setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
	};

	return <button onClick={handlerTheme}>{theme}</button>;
};

export default Button;
