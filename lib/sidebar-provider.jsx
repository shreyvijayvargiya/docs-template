"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { setSidebarDesktopCookie } from "./sidebar-utils-client";

const SidebarContext = createContext(undefined);

export function SidebarProvider({
	children,
	initialDesktopExpanded = true,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [desktopExpanded, setDesktopExpanded] = useState(
		initialDesktopExpanded
	);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const row = document.cookie
			.split("; ")
			.find((r) => r.startsWith("sidebar_desktop="));
		if (row?.split("=")[1] === "0") {
			setDesktopExpanded(false);
		}
	}, []);

	const persistDesktop = useCallback((next) => {
		setSidebarDesktopCookie(next);
		setDesktopExpanded(next);
	}, []);

	const toggleSidebar = () => {
		setIsOpen((prev) => !prev);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};

	const toggleDesktopSidebar = useCallback(() => {
		setDesktopExpanded((prev) => {
			const next = !prev;
			setSidebarDesktopCookie(next);
			return next;
		});
	}, []);

	return (
		<SidebarContext.Provider
			value={{
				isOpen,
				toggleSidebar,
				closeSidebar,
				desktopExpanded,
				setDesktopExpanded: persistDesktop,
				toggleDesktopSidebar,
			}}
		>
			{children}
		</SidebarContext.Provider>
	);
}

export function useSidebar() {
	const context = useContext(SidebarContext);
	if (context === undefined) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
}
