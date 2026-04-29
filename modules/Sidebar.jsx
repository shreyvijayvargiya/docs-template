"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
	ChevronDown,
	ChevronRight,
	ExternalLink,
	FileText,
	MessageCircle,
	LayoutDashboard,
	Sparkles,
	PanelLeftClose,
	Rocket,
	ArrowRightLeft,
	Package,
	Info,
	Inbox,
	Gauge,
	Coins,
	Receipt,
	LineChart,
	Gift,
	ShoppingCart,
	Hourglass,
	UsersRound,
	FormInput,
	PercentCircle,
	Network,
	Key,
	Webhook,
	Shield,
	Hammer,
	Boxes,
	BadgeCheck,
	Tag,
	Archive as ArchiveIcon,
	LifeBuoy,
	Brain,
	Cloud,
	Radio,
	Timer,
	Layers2,
	Zap,
	Terminal,
	Cog,
} from "lucide-react";
import { useSidebar } from "../lib/sidebar-provider";

/**
 * Icons for each sidebar nav label. Compound keys use `SectionHeading|Label`;
 * nested items use `SectionHeading|ParentDropdown|ChildLabel`.
 */
const SIDEBAR_NAV_ICONS = {
	"Bootup|Introduction": Rocket,
	"Bootup|Migrate to Docs": ArrowRightLeft,

	"Features|Products": Package,
	"Features|Usage Based Billing": PercentCircle,
	"Features|Introduction": Info,
	"Features|Event Ingestion": Inbox,
	"Features|Ingestion Strategies": Network,
	"Features|Meters": Gauge,
	"Features|Credits": Coins,
	"Features|Billing": Receipt,
	"Features|Cost Insights": LineChart,
	"Features|Benefits": Gift,
	"Features|Checkout": ShoppingCart,
	"Features|Trials": Hourglass,
	"Features|Seat-Based Pricing": UsersRound,
	"Features|Custom Fields": FormInput,
	"Features|Discounts": PercentCircle,

	"Features|Ingestion Strategies|Strategy Introduction": Layers2,
	"Features|Ingestion Strategies|LLM Strategy": Brain,
	"Features|Ingestion Strategies|S3 Strategy": Cloud,
	"Features|Ingestion Strategies|Stream Strategy": Radio,
	"Features|Ingestion Strategies|Delta Time Strategy": Timer,

	"Authentication|Getting Started": Zap,
	"Authentication|API Keys": Key,
	"Authentication|OAuth": Shield,

	"Endpoints|Products": Package,
	"Endpoints|Meters": Gauge,
	"Endpoints|Billing": Receipt,
	"Endpoints|Webhooks": Webhook,

	"Getting Started|Quick Start": Zap,
	"Getting Started|Installation": Terminal,
	"Getting Started|Configuration": Cog,

	"Tutorials|Building Your First App": Hammer,
	"Tutorials|Advanced Patterns": Boxes,
	"Tutorials|Best Practices": BadgeCheck,

	"Releases|Latest": Sparkles,
	"Releases|v2.0.0": Tag,
	"Releases|v1.5.0": Tag,
	"Releases|v1.0.0": Tag,

	"Archive|2024": ArchiveIcon,
	"Archive|2023": ArchiveIcon,

	"|Support": LifeBuoy,
};

function resolveSidebarNavIcon(sectionHeading, itemLabel, parentItemName = null) {
	const head = sectionHeading ?? "";
	const label = itemLabel ?? "";
	const parent = parentItemName ?? "";
	const key = parent ? `${head}|${parent}|${label}` : `${head}|${label}`;
	return SIDEBAR_NAV_ICONS[key] ?? FileText;
}

const Sidebar = () => {
	const { t } = useTranslation("common");
	const { isOpen, closeSidebar, desktopExpanded, toggleDesktopSidebar } =
		useSidebar();
	const pathname = usePathname();
	const [openSections, setOpenSections] = useState({
		usageBasedBilling: false,
		ingestionStrategies: false,
	});

	useEffect(() => {
		if (isOpen) {
			closeSidebar();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const getActiveNavbarTab = () => {
		if (pathname.startsWith("/api-reference")) return "API Reference";
		if (pathname.startsWith("/guides")) return "Guides";
		if (pathname.startsWith("/changelog")) return "Changelog";
		if (pathname.startsWith("/support")) return "Support";
		return "Docs";
	};

	const activeNavbarTab = getActiveNavbarTab();

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

	const generateSlug = (name) => {
		return name.toLowerCase().replace(/\s+/g, "-");
	};

	const getRoutePath = (heading, itemName, parentName = null) => {
		const headingSlug = generateSlug(heading);
		const itemSlug = generateSlug(itemName);

		if (baseRoute === "/support" && !heading) {
			return `${baseRoute}/${itemSlug}`;
		}

		if (parentName) {
			const parentSlug = generateSlug(parentName);
			return `${baseRoute}/${headingSlug}/${parentSlug}/${itemSlug}`;
		}

		if (!heading || headingSlug === "") {
			return `${baseRoute}/${itemSlug}`;
		}

		return `${baseRoute}/${headingSlug}/${itemSlug}`;
	};

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

	const supportNavigationData = [
		{
			heading: "",
			items: [{ name: "Support", hasDropdown: false }],
		},
	];

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

	const sidebarNavSections = getNavigationData();

	const bottomLinks = [
		{ name: "AI Assistant", icon: Sparkles, hasExternal: false, isAI: true },
		{ name: "llms-full.txt", icon: FileText, hasExternal: true },
		{ name: "Contact support", icon: MessageCircle, hasExternal: true },
		{ name: "Dashboard", icon: LayoutDashboard, hasExternal: true },
	];

	const sidebarContent = (
		<div className="w-64 h-screen bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
			<div className="p-2 border-b border-zinc-200 dark:border-zinc-800">
				<div className="flex items-center justify-between gap-2">
					<div className="flex items-center gap-2 min-w-0">
						<div className="w-4 h-4 bg-zinc-900 dark:bg-zinc-800 rounded-full flex-shrink-0 flex items-center justify-center">
							<div className="w-2 h-2 bg-white dark:bg-zinc-100 rounded-full opacity-80" />
						</div>
					</div>
					<button
						type="button"
						onClick={toggleDesktopSidebar}
						className="hidden lg:inline-flex p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
						title={t("nav.toggleSidebarCollapse")}
						aria-label={t("nav.toggleSidebarCollapse")}
					>
						<PanelLeftClose className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
					</button>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto px-1">
				{sidebarNavSections.map((section, sectionIndex) => (
					<div
						key={sectionIndex}
						className="border-b border-zinc-100 p-2 last:border-b-0 dark:border-zinc-800/80"
					>
						{section.heading && (
							<h3 className="mb-3 px-1 font-sans text-xs font-semibold uppercase leading-4 tracking-wide text-zinc-600 dark:text-zinc-400">
								{section.heading}
							</h3>
						)}
						<ul className="space-y-0.5">
							{section.items.map((item, itemIndex) => {
								const sectionOpen = item.key ? openSections[item.key] : false;
								const routePath = getRoutePath(section.heading, item.name);
								const isActive = pathname === routePath;

								const hasActiveSubItem =
									item.hasDropdown &&
									item.subItems &&
									item.subItems.length > 0
										? item.subItems.some((subItem) => {
												const subRoutePath = getRoutePath(
													section.heading,
													subItem,
													item.name,
												);
												return pathname === subRoutePath;
											})
										: false;

								const hasSubs =
									item.hasDropdown && item.subItems && item.subItems.length > 0;

								const ItemIcon = resolveSidebarNavIcon(
									section.heading,
									item.name,
								);

								return (
									<li key={itemIndex}>
										{hasSubs ? (
											<>
												<button
													type="button"
													onClick={() => toggleSection(item.key)}
													className={`w-full flex items-center gap-2 px-3 py-2.5 text-[13px] leading-snug rounded-xl transition-colors ${
														hasActiveSubItem
															? "text-zinc-900 dark:text-zinc-100 font-bold"
															: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
													}`}
												>
													<ItemIcon
														className="h-4 w-4 shrink-0 opacity-80 text-zinc-500 dark:text-zinc-400"
														strokeWidth={2}
														aria-hidden
													/>
													<span className="flex-1 min-w-0 text-left truncate">
														{item.name}
													</span>
													{sectionOpen ? (
														<ChevronDown className="w-4 h-4 shrink-0" />
													) : (
														<ChevronRight className="w-4 h-4 shrink-0" />
													)}
												</button>
												{sectionOpen && (
													<ul className="ml-1 mt-2 space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-3">
														{item.subItems.map((subItem, subIndex) => {
															const subRoutePath = getRoutePath(
																section.heading,
																subItem,
																item.name,
															);
															const isSubActive = pathname === subRoutePath;
															const SubIcon = resolveSidebarNavIcon(
																section.heading,
																subItem,
																item.name,
															);
															return (
																<li key={subIndex}>
																	<Link
																		href={subRoutePath}
																		className={`flex items-center gap-2 text-left px-2 py-2 text-[13px] leading-snug rounded-lg transition-colors ${
																			isSubActive
																				? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold"
																				: "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
																		}`}
																	>
																		<SubIcon
																			className="h-3.5 w-3.5 shrink-0 opacity-80 text-zinc-500 dark:text-zinc-400"
																			strokeWidth={2}
																			aria-hidden
																		/>
																		<span className="truncate">
																			{subItem}
																		</span>
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
												className={`w-full flex items-center justify-between gap-2 p-2 text-xs leading-snug rounded-xl transition-colors ${
													isActive
														? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold"
														: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
												}`}
											>
												<ItemIcon
													className="h-3.5 w-3.5 shrink-0 opacity-80 text-zinc-500 dark:text-zinc-400"
													strokeWidth={2}
													aria-hidden
												/>
												<span className="truncate flex-1 min-w-0 text-left">
													{item.name}
												</span>
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

			<div className="border-t border-zinc-200 p-2 dark:border-zinc-800 space-y-1">
				{bottomLinks.map((link, index) => {
					const Icon = link.icon;
					return (
						<a
							key={index}
							href="#"
							className="group flex items-center justify-between rounded-xl p-2 text-xs leading-snug text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
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
			<div
				className={`hidden lg:block fixed left-0 top-0 w-64 h-screen z-30 transition-transform duration-200 ease-out ${
					desktopExpanded ? "translate-x-0" : "-translate-x-full pointer-events-none"
				}`}
			>
				{sidebarContent}
			</div>

			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeSidebar}
							className="fixed inset-0 bg-black/50 dark:bg-black/70 z-[40] lg:hidden"
						/>
						<motion.div
							initial={{ x: -256 }}
							animate={{ x: 0 }}
							exit={{ x: -256 }}
							transition={{ type: "tween", duration: 0.2 }}
							className="fixed left-0 top-0 h-screen z-[40] lg:hidden"
						>
							{sidebarContent}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Sidebar;
