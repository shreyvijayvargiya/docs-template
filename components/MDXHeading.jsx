"use client";

import { useMemo, useEffect, useRef } from "react";
import { Link as LinkIcon } from "lucide-react";
import { useHeadings } from "../lib/headings-context";

function generateId(text) {
	if (!text) return "";
	return text
		.toString()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

function extractText(children) {
	if (typeof children === "string") return children;
	if (typeof children === "number") return children.toString();
	if (Array.isArray(children)) {
		return children.map(extractText).join("");
	}
	if (children?.props?.children) {
		return extractText(children.props.children);
	}
	return "";
}

export default function MDXHeading({ level, children, ...props }) {
	const { addHeading } = useHeadings();
	const text = useMemo(() => extractText(children), [children]);
	const id = useMemo(() => generateId(text), [text]);
	const hasRegistered = useRef(false);

	useEffect(() => {
		// Only register headings on the client side
		if (typeof window !== "undefined" && text && id && !hasRegistered.current) {
			hasRegistered.current = true;
			addHeading(id, text, level);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, text, level]);

	const HeadingTag = `h${level}`;
	const classes = {
		1: "!font-bold mb-4 my-6 !text-zinc-900 dark:!text-zinc-100",
		2: "!font-semibold my-4 !text-zinc-900 dark:!text-zinc-100",
		3: "!font-medium my-2 !text-zinc-900 dark:!text-zinc-100",
	};
	const fontSizes = {
		1: {
			fontSize: "2rem",
			lineHeight: "2.5rem",
			marginBottom: "10px",
			marginTop: "10px",
		}, // text-4xl
		2: {
			fontSize: "1.5rem",
			lineHeight: "2rem",
			marginBottom: "8px",
			marginTop: "10px",
		}, // text-2xl
		3: {
			fontSize: "1.25rem",
			lineHeight: "1.75rem",
			marginBottom: "4px",
			marginTop: "10px",
		}, // text-xl
	};

	const handleLinkClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (id) {
			// Update URL hash
			const url = new URL(window.location.href);
			url.hash = id;
			window.history.pushState({}, "", url);

			// Scroll to element with a small delay to ensure DOM is ready
			setTimeout(() => {
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
			}, 50);
		}
	};

	return (
		<HeadingTag
			id={id}
			className={`w-fit group relative flex items-center justify-start gap-2 ${classes[level]}`}
			style={fontSizes[level]}
			{...props}
		>
			{children}
			<button
				onClick={handleLinkClick}
				className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-400 flex-shrink-0 pl-2"
				aria-label={`Link to ${text}`}
			>
				<LinkIcon className="w-4 h-4" />
			</button>
		</HeadingTag>
	);
}
