"use client";

import React, {
	useState,
	useEffect,
	useMemo,
	useRef,
	useCallback,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
	Search,
	X,
	BookOpen,
	Code,
	GraduationCap,
	History,
	HelpCircle,
} from "lucide-react";
import {
	navigationData as sharedNav,
	getFirstRoute,
	getGroupedSearchNavigation,
} from "../lib/navigation-data";

export default function DocSearch() {
	const { t } = useTranslation("common");
	const router = useRouter();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [filter, setFilter] = useState("");
	const [activeResult, setActiveResult] = useState(0);
	const searchInputRef = useRef(null);

	const groupedSearch = useMemo(() => getGroupedSearchNavigation(), []);

	const flatSearchLinks = useMemo(() => {
		const out = [];
		groupedSearch.forEach((g) => {
			g.items.forEach((item) => {
				out.push({ ...item, groupI18nKey: g.i18nKey });
			});
		});
		return out;
	}, [groupedSearch]);

	const filteredSearchLinks = useMemo(() => {
		const q = filter.trim().toLowerCase();
		if (!q) return flatSearchLinks;
		return flatSearchLinks.filter(
			(l) =>
				l.label.toLowerCase().includes(q) ||
				l.href.toLowerCase().includes(q),
		);
	}, [flatSearchLinks, filter]);

	const navbarTabsModal = [
		{
			id: "Docs",
			labelKey: "tabs.docs",
			icon: BookOpen,
			path: getFirstRoute(sharedNav.docs, "/docs"),
		},
		{
			id: "API Reference",
			labelKey: "tabs.apiReference",
			icon: Code,
			path: getFirstRoute(sharedNav["api-reference"], "/api-reference"),
		},
		{
			id: "Guides",
			labelKey: "tabs.guides",
			icon: GraduationCap,
			path: getFirstRoute(sharedNav.guides, "/guides"),
		},
		{
			id: "Changelog",
			labelKey: "tabs.changelog",
			icon: History,
			path: getFirstRoute(sharedNav.changelog, "/changelog"),
		},
		{
			id: "Support",
			labelKey: "tabs.support",
			icon: HelpCircle,
			path: getFirstRoute(sharedNav.support, "/support"),
		},
	];

	const closeSearch = useCallback(() => {
		setIsOpen(false);
		setFilter("");
		setActiveResult(0);
	}, []);

	const openSearch = useCallback(() => setIsOpen(true), []);

	useEffect(() => {
		setActiveResult(0);
	}, [filter]);

	useEffect(() => {
		setActiveResult((r) =>
			filteredSearchLinks.length === 0
				? 0
				: Math.min(r, Math.max(0, filteredSearchLinks.length - 1)),
		);
	}, [filteredSearchLinks]);

	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e) => {
			if (e.key === "Escape") {
				e.preventDefault();
				closeSearch();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [isOpen, closeSearch]);

	useEffect(() => {
		const hk = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				openSearch();
			}
		};
		window.addEventListener("keydown", hk);
		return () => window.removeEventListener("keydown", hk);
	}, []);

	useEffect(() => {
		const onNav = () => closeSearch();
		window.addEventListener("popstate", onNav);
		return () => window.removeEventListener("popstate", onNav);
	}, [closeSearch]);

	const modalKeyNav = useCallback(
		(e) => {
			if (e.metaKey || e.ctrlKey || e.altKey) return;
			const list = filteredSearchLinks;
			if (e.key === "ArrowDown") {
				if (!list.length) return;
				e.preventDefault();
				setActiveResult((i) =>
					Math.min(i + 1, Math.max(list.length - 1, 0)),
				);
			} else if (e.key === "ArrowUp") {
				if (!list.length) return;
				e.preventDefault();
				setActiveResult((i) => Math.max(i - 1, 0));
			} else if (e.key === "Enter") {
				e.preventDefault();
				const idx = Math.min(activeResult, Math.max(0, list.length - 1));
				const row = list[idx];
				if (row) {
					closeSearch();
					router.push(row.href);
				}
			}
		},
		[filteredSearchLinks, activeResult, router, closeSearch],
	);

	return (
		<div className="flex min-w-0 flex-1 items-center justify-center gap-2">
			<button
				type="button"
				className="lg:hidden p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0"
				onClick={openSearch}
				aria-label={t("search.title")}
			>
				<Search className="w-4 h-4" />
			</button>

			<div className="hidden lg:flex flex-1 min-w-md max-w-lg mx-2">
				<button
					type="button"
					onClick={openSearch}
					className="relative w-full text-left rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-900/50 py-1.5 pl-9 pr-12 text-xs text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
				>
					<Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
					<span className="truncate block">{t("search.sidebarPlaceholder")}</span>
					<kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded">
						⌘K
					</kbd>
				</button>
			</div>

			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 dark:bg-black/70 z-[70] flex items-start justify-center pt-16 px-4"
					onClick={closeSearch}
					role="presentation"
				>
					<div
						className="bg-white dark:bg-zinc-950 rounded-xl shadow-xl w-full max-w-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col max-h-[min(85vh,calc(100vh-4rem))]"
						onClick={(e) => e.stopPropagation()}
						onKeyDown={modalKeyNav}
						role="dialog"
						aria-modal="true"
						aria-labelledby="docs-search-heading"
					>
						<div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
							<div className="flex items-center gap-2">
								<Search className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
								<h3
									id="docs-search-heading"
									className="font-semibold text-sm text-zinc-900 dark:text-zinc-100"
								>
									{t("search.title")}
								</h3>
							</div>
							<button
								type="button"
								onClick={closeSearch}
								className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
								aria-label="Close search"
							>
								<X className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
							</button>
						</div>

						<div className="p-4 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
								<input
									ref={searchInputRef}
									type="text"
									value={filter}
									onChange={(e) => setFilter(e.target.value)}
									placeholder={t("search.placeholder")}
									className="w-full pl-10 pr-4 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent text-sm"
									autoFocus
								/>
							</div>
						</div>

						<div className="overflow-y-auto flex-1 min-h-0 divide-y divide-zinc-100 dark:divide-zinc-800">
							<div className="p-4 pb-3">
								<h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
									{t("search.quickNav")}
								</h4>
								<div className="grid sm:grid-cols-2 gap-2">
									{navbarTabsModal.map((tab) => {
										const Icon = tab.icon;
										const tabCheck =
											tab.id === "Docs"
												? pathname === "/" ||
													pathname.startsWith("/docs")
												: pathname === tab.path ||
													pathname.startsWith(tab.path + "/");
										return (
											<Link
												key={tab.id}
												href={tab.path}
												onClick={closeSearch}
												className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors border ${
													tabCheck
														? "border-zinc-200 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
														: "border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
												}`}
											>
												<Icon className="w-4 h-4 shrink-0" />
												<span className="text-sm">{t(tab.labelKey)}</span>
											</Link>
										);
									})}
								</div>
								<p className="mt-4 text-[11px] text-zinc-500 dark:text-zinc-400">
									{t("search.shortcutsHint")}
								</p>
							</div>

							<div className="p-4 pt-2">
								<h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
									{t("search.browseBySection")}
								</h4>
								{filteredSearchLinks.length === 0 ? (
									<p className="text-sm text-zinc-500 dark:text-zinc-400 py-2">
										{t("search.noResults")}
									</p>
								) : (
									<ul className="space-y-0.5 max-h-[min(40vh,22rem)] overflow-y-auto pr-1">
										{filteredSearchLinks.map((item, gi) => {
											const highlighted = gi === activeResult;
											return (
												<li key={`${item.href}-${item.label}-${gi}`}>
													<Link
														href={item.href}
														onMouseEnter={() => setActiveResult(gi)}
														onClick={closeSearch}
														className={`block px-3 py-2 rounded-lg text-sm border ${
															highlighted
																? "bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-zinc-50"
																: "border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300"
														}`}
														title={item.label}
													>
														<span className="block truncate font-medium">
															{item.label}
														</span>
														<span className="block text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
															{t(item.groupI18nKey)}
														</span>
													</Link>
												</li>
											);
										})}
									</ul>
								)}
							</div>
						</div>
						<div className="hidden sm:flex border-t border-zinc-200 dark:border-zinc-800 px-4 py-2 shrink-0 text-[11px] text-zinc-500 dark:text-zinc-400 justify-between gap-4 bg-zinc-50/90 dark:bg-zinc-900/90 rounded-b-xl">
							<span>↑↓ Navigate</span>
							<span>↵ Open</span>
							<span>Esc Close</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
