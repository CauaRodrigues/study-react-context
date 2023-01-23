import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<main className={`${theme}Mode`}>
			<h1>Home</h1>

			<Button />

			<Link to="/about">About</Link>
		</main>
	);
};

export default Home;
