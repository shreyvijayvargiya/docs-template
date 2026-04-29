"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function TableOfContents({ headings = [] }) {
	const { t } = useTranslation("common");
	const [activeId, setActiveId] = useState("");

	const scrollToHeading = useCallback((id) => {
		if (!id) return;
		const element = document.getElementById(id);
		if (element) {
			const offset = 80; // Account for fixed navbar
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	}, []);


	useEffect(() => {
		// Handle initial hash on mount - wait for headings to be rendered
		const handleInitialHash = () => {
			if (typeof window !== "undefined" && window.location.hash) {
				const hash = window.location.hash.slice(1);
				setTimeout(() => {
					scrollToHeading(hash);
					setActiveId(hash);
				}, 300);
			}
		};

		// Wait for headings to be available
		if (headings.length > 0) {
			handleInitialHash();
		}

		// Handle hash changes (browser back/forward)
		const handleHashChange = () => {
			if (typeof window !== "undefined" && window.location.hash) {
				const hash = window.location.hash.slice(1);
				setTimeout(() => {
					scrollToHeading(hash);
					setActiveId(hash);
				}, 100);
			}
		};

		window.addEventListener("hashchange", handleHashChange);
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [headings, scrollToHeading]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
						// Update URL hash without scrolling
						if (entry.target.id) {
							const url = new URL(window.location.href);
							url.hash = entry.target.id;
							window.history.replaceState({}, "", url);
						}
					}
				});
			},
			{
				rootMargin: "-20% 0% -35% 0%",
			}
		);

		headings.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => {
			headings.forEach(({ id }) => {
				const element = document.getElementById(id);
				if (element) observer.unobserve(element);
			});
		};
	}, [headings]);

	const handleClick = (e, id) => {
		e.preventDefault();
		if (id) {
			// Update URL hash
			const url = new URL(window.location.href);
			url.hash = id;
			window.history.pushState({}, "", url);

			// Scroll to heading
			setTimeout(() => {
				scrollToHeading(id);
				setActiveId(id);
			}, 50);
		}
	};

	if (headings.length === 0) return null;

	return (
		<aside className="relative overflow-y-auto overscroll-contain pl-4 dark:border-zinc-700 w-full">
			<div className="pb-4">
				<h3 className="mb-3 px-1 font-sans text-xs font-semibold uppercase leading-4 tracking-wide text-zinc-600 dark:text-zinc-400">
					{t("toc.title")}
				</h3>
				<nav className="space-y-2">
					{headings.map(({ id, text, level }) => {
						const isActive = activeId === id;
						const indent = level > 1 ? (level - 1) * 12 : 0;

						return (
							<button
								key={id}
								type="button"
								onClick={(e) => handleClick(e, id)}
								className={`block w-full text-left text-sm rounded-md py-1.5 pl-3 border-l-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 ${
									isActive
										? "text-zinc-900 dark:text-zinc-50 font-semibold border-zinc-900 dark:border-zinc-100 bg-zinc-50 dark:bg-zinc-900/30"
										: "text-zinc-600 dark:text-zinc-400 border-transparent"
								}`}
								style={{
									paddingLeft: `calc(0.75rem + ${indent}px)`,
								}}
							>
								{text}
							</button>
						);
					})}
				</nav>
			</div>
		</aside>
	);
}
