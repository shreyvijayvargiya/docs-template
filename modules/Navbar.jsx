"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { navigationData, getFirstRoute } from "../lib/navigation-data";
import {
	BookOpen,
	Code,
	GraduationCap,
	History,
	HelpCircle,
	Menu,
	PanelLeft,
	Languages,
	ChevronDown,
	Sun,
	Moon,
} from "lucide-react";
import { useSidebar } from "../lib/sidebar-provider";
import { useTheme } from "../lib/theme-provider";
import DocSearch from "./DocSearch";

const Navbar = () => {
	const { theme, toggleTheme } = useTheme();
	const { t, i18n } = useTranslation("common");
	const pathname = usePathname();
	const { toggleSidebar, desktopExpanded, toggleDesktopSidebar } =
		useSidebar();
	const [langOpen, setLangOpen] = useState(false);
	const langWrapRef = useRef(null);

	const getFirstRouteForSection = (sectionKey, baseRoute) => {
		return getFirstRoute(navigationData[sectionKey], baseRoute);
	};

	const tabs = [
		{
			id: "Docs",
			labelKey: "tabs.docs",
			icon: BookOpen,
			path: getFirstRouteForSection("docs", "/docs"),
		},
		{
			id: "API Reference",
			labelKey: "tabs.apiReference",
			icon: Code,
			path: getFirstRouteForSection("api-reference", "/api-reference"),
		},
		{
			id: "Guides",
			labelKey: "tabs.guides",
			icon: GraduationCap,
			path: getFirstRouteForSection("guides", "/guides"),
		},
		{
			id: "Changelog",
			labelKey: "tabs.changelog",
			icon: History,
			path: getFirstRouteForSection("changelog", "/changelog"),
		},
		{
			id: "Support",
			labelKey: "tabs.support",
			icon: HelpCircle,
			path: getFirstRouteForSection("support", "/support"),
		},
	];

	useEffect(() => {
		function close(e) {
			if (
				langWrapRef.current &&
				!langWrapRef.current.contains(e.target)
			) {
				setLangOpen(false);
			}
		}
		document.addEventListener("mousedown", close);
		return () => document.removeEventListener("mousedown", close);
	}, []);

	function setLng(lng) {
		void i18next.changeLanguage(lng);
		setLangOpen(false);
	}

	function currentLngLabel() {
		return i18n.language?.startsWith("es") ? "Español" : "English";
	}

	function LangDropdown({ compact }) {
		return (
			<div ref={langWrapRef} className="relative">
				<button
					type="button"
					onClick={() => setLangOpen((v) => !v)}
					className={`flex items-center gap-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors ${
						compact
							? "px-2 py-1 text-[10px]"
							: "px-2.5 py-1 text-xs font-medium"
					}`}
					aria-expanded={langOpen}
					aria-haspopup="listbox"
					aria-label={t("nav.language")}
				>
					<Languages className={compact ? "w-3.5 h-3.5" : "w-3.5 h-3.5"} />
					<span className="hidden sm:inline truncate max-w-[7rem]">
						{currentLngLabel()}
					</span>
					<ChevronDown className="w-3.5 h-3.5 opacity-70 hidden sm:inline" />
				</button>
				{langOpen && (
					<ul
						role="listbox"
						className="absolute right-0 top-full mt-1 min-w-[10rem] py-1 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 shadow-lg z-[80]"
					>
						<li>
							<button
								type="button"
								onClick={() => setLng("en")}
								className="w-full text-left px-3 py-2 text-xs text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg mx-1"
							>
								English
							</button>
						</li>
						<li>
							<button
								type="button"
								onClick={() => setLng("es")}
								className="w-full text-left px-3 py-2 text-xs text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg mx-1"
							>
								Español
							</button>
						</li>
					</ul>
				)}
			</div>
		);
	}

	const navInsetClass = desktopExpanded ? "lg:left-64" : "lg:left-0";

	const tabIsActive = (tab) => {
		if (tab.id === "Docs") return pathname.startsWith("/docs");
		if (tab.id === "API Reference")
			return pathname.startsWith("/api-reference");
		if (tab.id === "Guides") return pathname.startsWith("/guides");
		if (tab.id === "Changelog") return pathname.startsWith("/changelog");
		if (tab.id === "Support") return pathname.startsWith("/support");
		return false;
	};

	return (
		<nav
			className={`fixed top-0 left-0 ${navInsetClass} right-0 h-12 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 z-30`}
		>
			<div className="h-full flex items-center md:px-2 gap-1 md:gap-2 w-full md:border-none border-b border-zinc-100 dark:border-zinc-800 px-3">
				<div className="flex items-center min-w-0 shrink flex-[1_1_0] gap-2">
					<div className="lg:hidden flex items-center gap-2 mr-2 shrink-0">
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								toggleSidebar();
							}}
							className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
							aria-label={t("nav.toggleSidebar")}
						>
							<Menu className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
						</button>
						<div className="flex items-center gap-2">
							<div className="w-6 h-6 bg-zinc-900 dark:bg-zinc-100 rounded flex items-center justify-center">
								<div className="w-3 h-3 bg-white dark:bg-zinc-900 rounded-full opacity-80" />
							</div>
							<span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
								Docs
							</span>
						</div>
					</div>

					<div className="hidden lg:flex items-center gap-1 min-w-0 flex-1 overflow-x-auto hide-scrollbar">
						{!desktopExpanded && (
							<button
								type="button"
								onClick={toggleDesktopSidebar}
								className="p-1.5 shrink-0 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors mr-1"
								title={t("nav.toggleSidebarExpand")}
								aria-label={t("nav.toggleSidebarExpand")}
							>
								<PanelLeft className="w-4 h-4" />
							</button>
						)}
						{tabs.map((tab) => {
							const Icon = tab.icon;
							const isActive = tabIsActive(tab);
							return (
								<Link
									key={tab.id}
									href={tab.path}
									className={`px-3 py-1.5 text-xs font-medium transition-colors flex items-center gap-1.5 rounded-xl whitespace-nowrap ${
										isActive
											? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
											: "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
									}`}
								>
									<Icon className="w-3.5 h-3.5 shrink-0" />
									<span>{t(tab.labelKey)}</span>
								</Link>
							);
						})}
					</div>

				</div>


				<div className="flex items-center shrink-0 gap-1 sm:gap-1">
				<DocSearch />
				<button
					type="button"
					onClick={toggleTheme}
					className="p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
					title={
						theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
					}
					aria-label={
						theme === "dark"
							? "Switch to light mode"
							: "Switch to dark mode"
					}
				>
					{theme === "dark" ? (
						<Sun className="w-4 h-4" />
					) : (
						<Moon className="w-4 h-4" />
					)}
				</button>
				<div className="hidden lg:block">
					<LangDropdown />
				</div>

				<div className="lg:hidden">
					<LangDropdown compact />
				</div>
				</div>
			</div>
			<div className="lg:hidden flex items-center gap-1 py-2 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto hidescrollbar flex-1 min-w-0">
						{tabs.map((tab) => {
							const isActive = tabIsActive(tab);
							return (
								<Link
									key={tab.id}
									href={tab.path}
									className={`px-2 py-1 text-[10px] font-medium transition-colors whitespace-nowrap rounded-lg shrink-0 ${
										isActive
											? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
											: "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100"
									}`}
								>
									{t(tab.labelKey)}
								</Link>
							);
						})}
			</div>
		</nav>
	);
};

export default Navbar;
