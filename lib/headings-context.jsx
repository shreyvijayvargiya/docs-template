"use client";

import { createContext, useContext, useState, useCallback } from "react";

const HeadingsContext = createContext(null);

export function HeadingsProvider({ children }) {
	const [headings, setHeadings] = useState([]);

	const addHeading = useCallback((id, text, level) => {
		setHeadings((prev) => {
			// Check if heading already exists
			if (prev.find((h) => h.id === id)) return prev;
			return [...prev, { id, text, level }];
		});
	}, []);

	return (
		<HeadingsContext.Provider value={{ headings, addHeading }}>
			{children}
		</HeadingsContext.Provider>
	);
}

export function useHeadings() {
	const context = useContext(HeadingsContext);
	if (!context) {
		throw new Error("useHeadings must be used within HeadingsProvider");
	}
	return context;
}
