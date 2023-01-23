import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import About from "./Pages/About";
import Home from "./Pages/Home";

const ConfigureRoutes = () => {
	const [theme, setTheme] = useState("dark");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

export default ConfigureRoutes;
