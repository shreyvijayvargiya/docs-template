"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { setThemeCookie } from "./theme-utils-client";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children, initialTheme = "light" }) {
	// Always use initialTheme from server to avoid hydration mismatch
	// The useEffect will sync with cookie after hydration
	const [theme, setTheme] = useState(initialTheme);

	useEffect(() => {
		// On mount, sync with cookie to handle any client-side changes
		// This runs only once on mount
		if (typeof window !== "undefined") {
			const cookieTheme = document.cookie
				.split("; ")
				.find((row) => row.startsWith("theme="))
				?.split("=")[1];

			// Only update if cookie differs from current theme
			if (cookieTheme && cookieTheme !== theme) {
				setTheme(cookieTheme);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		// Save theme preference to cookie
		setThemeCookie(theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => {
			const newTheme = prev === "dark" ? "light" : "dark";
			return newTheme;
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
