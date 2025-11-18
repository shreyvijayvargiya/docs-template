"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../lib/theme-provider";
import { navigationData, getFirstRoute } from "../lib/navigation-data";
import {
	BookOpen,
	Code,
	GraduationCap,
	History,
	HelpCircle,
} from "lucide-react";

const Navbar = () => {
	const { theme } = useTheme();
	const pathname = usePathname();

	// Get first routes for each section
	const getFirstRouteForSection = (sectionKey, baseRoute) => {
		return getFirstRoute(navigationData[sectionKey], baseRoute);
	};

	const tabs = [
		{
			id: "Docs",
			label: "Docs",
			icon: BookOpen,
			path: getFirstRouteForSection("docs", "/docs"),
		},
		{
			id: "API Reference",
			label: "API Reference",
			icon: Code,
			path: getFirstRouteForSection("api-reference", "/api-reference"),
		},
		{
			id: "Guides",
			label: "Guides",
			icon: GraduationCap,
			path: getFirstRouteForSection("guides", "/guides"),
		},
		{
			id: "Changelog",
			label: "Changelog",
			icon: History,
			path: getFirstRouteForSection("changelog", "/changelog"),
		},
		{
			id: "Support",
			label: "Support",
			icon: HelpCircle,
			path: getFirstRouteForSection("support", "/support"),
		},
	];

	return (
		<nav className="fixed top-0 left-64 right-0 h-12 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 z-30">
			<div className="h-full flex items-center px-4">
				<div className="flex items-center gap-0.5">
					{tabs.map((tab) => {
						const Icon = tab.icon;
						let isActive = false;

						// Determine base route for active state checking
						let baseRoute = "";
						if (tab.id === "Docs") {
							baseRoute = "/docs";
							isActive = pathname.startsWith("/docs");
						} else if (tab.id === "API Reference") {
							baseRoute = "/api-reference";
							isActive = pathname.startsWith("/api-reference");
						} else if (tab.id === "Guides") {
							baseRoute = "/guides";
							isActive = pathname.startsWith("/guides");
						} else if (tab.id === "Changelog") {
							baseRoute = "/changelog";
							isActive = pathname.startsWith("/changelog");
						} else if (tab.id === "Support") {
							baseRoute = "/support";
							isActive = pathname.startsWith("/support");
						}

						return (
							<Link
								key={tab.id}
								href={tab.path}
								className={`px-3 py-1.5 text-xs font-medium transition-colors flex items-center gap-1.5 rounded-xl ${
									isActive
										? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
										: "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
								}`}
							>
								<Icon className="w-3.5 h-3.5" />
								<span>{tab.label}</span>
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
