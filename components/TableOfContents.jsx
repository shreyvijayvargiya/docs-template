"use client";

import { useEffect, useState, useCallback } from "react";

export default function TableOfContents({ headings = [] }) {
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
		<aside className="sticky top-32 h-fit border-l border-zinc-100 dark:border-zinc-800 overflow-y-auto">
			<div className="">
				<h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
					On this page
				</h3>
				<nav className="my-2">
					{headings.map(({ id, text, level }) => {
						const isActive = activeId === id;
						const paddingLeft =
							level === 1 ? "0rem" : `${(level - 1) * 0.75}rem`;

						return (
							<button
								key={id}
								onClick={(e) => handleClick(e, id)}
								className={`block w-full text-left text-sm transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${
									isActive
										? "text-zinc-900 dark:text-zinc-100 font-medium border-l-2 border-zinc-900 dark:border-zinc-100 pl-3 -ml-6"
										: "text-zinc-600 dark:text-zinc-400 pl-3"
								}`}
								style={{ paddingLeft }}
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
