import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { ThemeContext } from "../contexts/ThemeContext";

const About = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<main className={`${theme}Mode`}>
			<h1>About</h1>

			<Button />

			<Link to="/">Home</Link>
		</main>
	);
};

export default About;
