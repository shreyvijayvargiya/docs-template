"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../lib/theme-provider";
import { useSidebar } from "../lib/sidebar-provider";
import { navigationData, getFirstRoute } from "../lib/navigation-data";
import {
	BookOpen,
	Code,
	GraduationCap,
	History,
	HelpCircle,
	Menu,
} from "lucide-react";

const Navbar = () => {
	const { theme } = useTheme();
	const { toggleSidebar } = useSidebar();
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
		<nav className="fixed top-0 left-0 lg:left-64 right-0 h-12 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 z-30">
			<div className="h-full flex items-center px-4">
				{/* Mobile: Toggle Button + Logo */}
				<div className="lg:hidden flex items-center gap-2 mr-2">
					<button
						onClick={(e) => {
							e.stopPropagation();
							toggleSidebar();
						}}
						className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
						aria-label="Toggle sidebar"
					>
						<Menu className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
					</button>
					{/* Company Logo - Mobile Only */}
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 bg-zinc-900 dark:bg-zinc-100 rounded flex items-center justify-center">
							<div className="w-3 h-3 bg-white dark:bg-zinc-900 rounded-full opacity-80"></div>
						</div>
						<span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
							Docs
						</span>
					</div>
				</div>

				{/* Desktop: Full Navbar Tabs */}
				<div className="hidden lg:flex items-center gap-0.5">
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

				{/* Mobile: Navbar Tabs (No Icons, Smaller Text) */}
				<div className="lg:hidden flex items-center gap-1 overflow-x-auto">
					{tabs.map((tab) => {
						let isActive = false;

						// Determine base route for active state checking
						if (tab.id === "Docs") {
							isActive = pathname.startsWith("/docs");
						} else if (tab.id === "API Reference") {
							isActive = pathname.startsWith("/api-reference");
						} else if (tab.id === "Guides") {
							isActive = pathname.startsWith("/guides");
						} else if (tab.id === "Changelog") {
							isActive = pathname.startsWith("/changelog");
						} else if (tab.id === "Support") {
							isActive = pathname.startsWith("/support");
						}

						return (
							<Link
								key={tab.id}
								href={tab.path}
								className={`px-2 py-1 text-[10px] font-medium transition-colors whitespace-nowrap rounded-lg ${
									isActive
										? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
										: "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
								}`}
							>
								{tab.label}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
