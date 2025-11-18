"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
	Search,
	ChevronDown,
	ChevronRight,
	ExternalLink,
	Sun,
	Moon,
	FileText,
	MessageCircle,
	LayoutDashboard,
	X,
	BookOpen,
	Code,
	GraduationCap,
	History,
	HelpCircle,
	Sparkles,
} from "lucide-react";
import { useTheme } from "../lib/theme-provider";
import { useSidebar } from "../lib/sidebar-provider";

const Sidebar = () => {
	const { theme, toggleTheme } = useTheme();
	const { isOpen, closeSidebar } = useSidebar();
	const pathname = usePathname();
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
	const [openSections, setOpenSections] = useState({
		usageBasedBilling: false,
		ingestionStrategies: false,
	});

	// Close sidebar when route changes on mobile
	useEffect(() => {
		if (isOpen) {
			closeSidebar();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const navbarTabs = [
		{ id: "Docs", label: "Docs", icon: BookOpen, path: "/" },
		{
			id: "API Reference",
			label: "API Reference",
			icon: Code,
			path: "/api-reference",
		},
		{ id: "Guides", label: "Guides", icon: GraduationCap, path: "/guides" },
		{ id: "Changelog", label: "Changelog", icon: History, path: "/changelog" },
		{ id: "Support", label: "Support", icon: HelpCircle, path: "/support" },
	];

	// Determine active navbar tab based on pathname
	const getActiveNavbarTab = () => {
		if (pathname.startsWith("/api-reference")) return "API Reference";
		if (pathname.startsWith("/guides")) return "Guides";
		if (pathname.startsWith("/changelog")) return "Changelog";
		if (pathname.startsWith("/support")) return "Support";
		return "Docs"; // Default to Docs
	};

	const activeNavbarTab = getActiveNavbarTab();

	// Get base route prefix based on active navbar tab
	const getBaseRoute = () => {
		switch (activeNavbarTab) {
			case "API Reference":
				return "/api-reference";
			case "Guides":
				return "/guides";
			case "Changelog":
				return "/changelog";
			case "Support":
				return "/support";
			default:
				return "/docs";
		}
	};

	const baseRoute = getBaseRoute();

	const toggleSection = (section) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	// Helper function to generate slug from name
	const generateSlug = (name) => {
		return name.toLowerCase().replace(/\s+/g, "-");
	};

	// Helper function to generate route path
	const getRoutePath = (heading, itemName, parentName = null) => {
		const headingSlug = generateSlug(heading);
		const itemSlug = generateSlug(itemName);

		// Handle Support routes (simpler structure)
		if (baseRoute === "/support" && !heading) {
			return `${baseRoute}/${itemSlug}`;
		}

		// Handle nested paths (e.g., Ingestion Strategies sub-items)
		if (parentName) {
			const parentSlug = generateSlug(parentName);
			return `${baseRoute}/${headingSlug}/${parentSlug}/${itemSlug}`;
		}

		// If heading is empty, just use item slug
		if (!heading || headingSlug === "") {
			return `${baseRoute}/${itemSlug}`;
		}

		return `${baseRoute}/${headingSlug}/${itemSlug}`;
	};

	// Navigation data for Docs
	const docsNavigationData = [
		{
			heading: "Bootup",
			items: [
				{ name: "Introduction", hasDropdown: false },
				{ name: "Migrate to Docs", hasDropdown: false },
			],
		},
		{
			heading: "Features",
			items: [
				{ name: "Products", hasDropdown: false },
				{
					name: "Usage Based Billing",
					hasDropdown: true,
					key: "usageBasedBilling",
					subItems: [],
				},
				{ name: "Introduction", hasDropdown: false },
				{ name: "Event Ingestion", hasDropdown: false },
				{
					name: "Ingestion Strategies",
					hasDropdown: true,
					key: "ingestionStrategies",
					subItems: [
						"Strategy Introduction",
						"LLM Strategy",
						"S3 Strategy",
						"Stream Strategy",
						"Delta Time Strategy",
					],
				},
				{ name: "Meters", hasDropdown: false },
				{ name: "Credits", hasDropdown: false },
				{ name: "Billing", hasDropdown: false },
				{
					name: "Cost Insights",
					hasDropdown: false,
					badge: "Beta",
					hasArrow: true,
				},
				{ name: "Benefits", hasDropdown: false, hasArrow: true },
				{ name: "Checkout", hasDropdown: false, hasArrow: true },
				{ name: "Trials", hasDropdown: false },
				{ name: "Seat-Based Pricing", hasDropdown: false },
				{ name: "Custom Fields", hasDropdown: false },
				{ name: "Discounts", hasDropdown: false },
			],
		},
	];

	// Navigation data for API Reference
	const apiReferenceNavigationData = [
		{
			heading: "Authentication",
			items: [
				{ name: "Getting Started", hasDropdown: false },
				{ name: "API Keys", hasDropdown: false },
				{ name: "OAuth", hasDropdown: false },
			],
		},
		{
			heading: "Endpoints",
			items: [
				{ name: "Products", hasDropdown: false },
				{ name: "Meters", hasDropdown: false },
				{ name: "Billing", hasDropdown: false },
				{ name: "Webhooks", hasDropdown: false },
			],
		},
	];

	// Navigation data for Guides
	const guidesNavigationData = [
		{
			heading: "Getting Started",
			items: [
				{ name: "Quick Start", hasDropdown: false },
				{ name: "Installation", hasDropdown: false },
				{ name: "Configuration", hasDropdown: false },
			],
		},
		{
			heading: "Tutorials",
			items: [
				{ name: "Building Your First App", hasDropdown: false },
				{ name: "Advanced Patterns", hasDropdown: false },
				{ name: "Best Practices", hasDropdown: false },
			],
		},
	];

	// Navigation data for Changelog
	const changelogNavigationData = [
		{
			heading: "Releases",
			items: [
				{ name: "Latest", hasDropdown: false },
				{ name: "v2.0.0", hasDropdown: false },
				{ name: "v1.5.0", hasDropdown: false },
				{ name: "v1.0.0", hasDropdown: false },
			],
		},
		{
			heading: "Archive",
			items: [
				{ name: "2024", hasDropdown: false },
				{ name: "2023", hasDropdown: false },
			],
		},
	];

	// Navigation data for Support
	const supportNavigationData = [
		{
			heading: "",
			items: [{ name: "Support", hasDropdown: false }],
		},
	];

	// Get navigation data based on active navbar tab
	const getNavigationData = () => {
		switch (activeNavbarTab) {
			case "API Reference":
				return apiReferenceNavigationData;
			case "Guides":
				return guidesNavigationData;
			case "Changelog":
				return changelogNavigationData;
			case "Support":
				return supportNavigationData;
			default:
				return docsNavigationData;
		}
	};

	const navigationData = getNavigationData();

	const bottomLinks = [
		{ name: "AI Assistant", icon: Sparkles, hasExternal: false, isAI: true },
		{ name: "llms-full.txt", icon: FileText, hasExternal: true },
		{ name: "Contact support", icon: MessageCircle, hasExternal: true },
		{ name: "Dashboard", icon: LayoutDashboard, hasExternal: true },
	];

	const sidebarContent = (
		<div className="w-64 h-screen bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
			{/* Header */}
			<div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
				{/* Logo */}
				<div className="flex items-center justify-between">
					<div className="w-4 h-4 bg-zinc-900 dark:bg-zinc-800 rounded-full flex items-center justify-center">
						<div className="w-2 h-2 bg-white dark:bg-zinc-100 rounded-full opacity-80"></div>
					</div>
					<button
						onClick={toggleTheme}
						className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
						title={
							theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
						}
					>
						{theme === "dark" ? (
							<Sun className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
						) : (
							<Moon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
						)}
					</button>
				</div>

				{/* Search Bar */}
				<div className="relative">
					<Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
					<input
						type="text"
						placeholder="Search..."
						onClick={() => setIsSearchModalOpen(true)}
						onFocus={() => setIsSearchModalOpen(true)}
						className="w-full pl-8 pr-12 py-1.5 border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent text-xs cursor-pointer"
					/>
					<kbd className="absolute right-2.5 top-1/2 transform -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded">
						⌘K
					</kbd>
				</div>
			</div>

			{/* Navigation */}
			<div className="flex-1 overflow-y-auto">
				{navigationData.map((section, sectionIndex) => (
					<div key={sectionIndex} className="px-3 py-1.5">
						{section.heading && (
							<h3 className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
								{section.heading}
							</h3>
						)}
						<ul className="space-y-0.5">
							{section.items.map((item, itemIndex) => {
								const isOpen = item.key ? openSections[item.key] : false;
								const routePath = getRoutePath(section.heading, item.name);
								const isActive = pathname === routePath;

								// Check if any sub-item is active
								const hasActiveSubItem =
									item.hasDropdown && item.subItems
										? item.subItems.some((subItem) => {
												const subRoutePath = getRoutePath(
													section.heading,
													subItem,
													item.name
												);
												return pathname === subRoutePath;
										  })
										: false;

								return (
									<li key={itemIndex}>
										{item.hasDropdown && item.subItems ? (
											<>
												<button
													onClick={() => toggleSection(item.key)}
													className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-xl transition-colors ${
														hasActiveSubItem
															? "text-zinc-900 dark:text-zinc-100 font-bold"
															: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
													}`}
												>
													<span>{item.name}</span>
													{isOpen ? (
														<ChevronDown className="w-3.5 h-3.5" />
													) : (
														<ChevronRight className="w-3.5 h-3.5" />
													)}
												</button>
												{isOpen && (
													<ul className="ml-3 mt-0.5 space-y-0.5">
														{item.subItems.map((subItem, subIndex) => {
															const subRoutePath = getRoutePath(
																section.heading,
																subItem,
																item.name
															);
															const isSubActive = pathname === subRoutePath;
															return (
																<li key={subIndex}>
																	<Link
																		href={subRoutePath}
																		className={`w-full block text-left px-2.5 py-1 text-xs rounded-xl transition-colors ${
																			isSubActive
																				? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold"
																				: "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
																		}`}
																	>
																		{subItem}
																	</Link>
																</li>
															);
														})}
													</ul>
												)}
											</>
										) : (
											<Link
												href={routePath}
												className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-xl transition-colors ${
													isActive
														? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold"
														: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
												}`}
											>
												<span>{item.name}</span>
												<div className="flex items-center gap-0.5">
													{item.badge && (
														<span className="text-[10px] px-1 py-0.5 bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded">
															{item.badge}
														</span>
													)}
													{item.hasArrow && (
														<ChevronRight className="w-3.5 h-3.5" />
													)}
												</div>
											</Link>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				))}
			</div>

			{/* Bottom Section */}
			<div className="border-t border-zinc-200 dark:border-zinc-800 p-3 space-y-1.5">
				{bottomLinks.map((link, index) => {
					const Icon = link.icon;
					return (
						<a
							key={index}
							href="#"
							className="flex items-center justify-between px-2.5 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors group"
						>
							<div className="flex items-center gap-1.5">
								<Icon className="w-3.5 h-3.5" />
								<span>{link.name}</span>
							</div>
							{link.hasExternal && (
								<ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 dark:text-zinc-400" />
							)}
						</a>
					);
				})}
			</div>
		</div>
	);

	return (
		<>
			{/* Desktop: Fixed Sidebar */}
			<div className="hidden lg:block fixed left-0 top-0 w-64 h-screen z-50">
				{sidebarContent}
			</div>

			{/* Mobile: Drawer with Animation */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeSidebar}
							className="fixed inset-0 bg-black/50 dark:bg-black/70 z-[55] lg:hidden"
						/>
						{/* Drawer */}
						<motion.div
							initial={{ x: -256 }}
							animate={{ x: 0 }}
							exit={{ x: -256 }}
							transition={{ type: "tween", duration: 0.2 }}
							className="fixed left-0 top-0 h-screen z-[60] lg:hidden"
						>
							{sidebarContent}
						</motion.div>
					</>
				)}
			</AnimatePresence>

			{isSearchModalOpen && (
				<div
					className="fixed inset-0 bg-black/50 dark:bg-black/70 z-[60] flex items-start justify-center pt-20"
					onClick={() => setIsSearchModalOpen(false)}
				>
					<div
						className="bg-white dark:bg-zinc-950 rounded-xl shadow-xl w-full max-w-2xl mx-4 border border-zinc-200 dark:border-zinc-800"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Modal Header */}
						<div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
							<div className="flex items-center gap-2">
								<Search className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
								<h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
									Search
								</h3>
							</div>
							<button
								onClick={() => setIsSearchModalOpen(false)}
								className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
							>
								<X className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
							</button>
						</div>

						{/* Search Input */}
						<div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
								<input
									type="text"
									placeholder="Search documentation..."
									className="w-full pl-10 pr-4 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent text-sm"
									autoFocus
								/>
							</div>
						</div>

						{/* Navigation Links */}
						<div className="p-4">
							<h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
								Quick Navigation
							</h4>
							<div className="space-y-1">
								{navbarTabs.map((tab) => {
									const Icon = tab.icon;
									let isActive = false;

									// Handle Docs route (should be active for "/" or "/docs/*")
									if (tab.path === "/") {
										isActive = pathname === "/" || pathname.startsWith("/docs");
									} else {
										// For other routes, check if pathname starts with the tab path
										isActive =
											pathname === tab.path ||
											pathname.startsWith(tab.path + "/");
									}

									return (
										<Link
											key={tab.id}
											href={tab.path}
											onClick={() => setIsSearchModalOpen(false)}
											className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
												isActive
													? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
													: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
											}`}
										>
											<Icon className="w-4 h-4" />
											<span className="text-sm">{tab.label}</span>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Sidebar;
