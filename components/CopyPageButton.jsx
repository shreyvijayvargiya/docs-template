"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyPageButton({ contentRef }) {
	const [copied, setCopied] = useState(false);

	const extractMarkdownFromElement = (element) => {
		if (!element) return "";

		const processNode = (node, depth = 0) => {
			if (node.nodeType === Node.TEXT_NODE) {
				const text = node.textContent || "";
				return text.trim() ? text : "";
			}

			if (node.nodeType !== Node.ELEMENT_NODE) return "";

			const tagName = node.tagName?.toLowerCase();
			const children = Array.from(node.childNodes)
				.map((child) => processNode(child, depth + 1))
				.filter((text) => text.trim())
				.join("");

			switch (tagName) {
				case "h1":
					return `# ${children}\n\n`;
				case "h2":
					return `## ${children}\n\n`;
				case "h3":
					return `### ${children}\n\n`;
				case "h4":
					return `#### ${children}\n\n`;
				case "h5":
					return `##### ${children}\n\n`;
				case "h6":
					return `###### ${children}\n\n`;
				case "p":
					return children ? `${children}\n\n` : "";
				case "code":
					// Check if parent is pre
					if (node.parentElement?.tagName?.toLowerCase() === "pre") {
						return children;
					}
					return children ? `\`${children}\`` : "";
				case "pre":
					const codeContent =
						node.querySelector("code")?.textContent || children;
					return `\`\`\`\n${codeContent}\n\`\`\`\n\n`;
				case "ul":
					return children ? `${children}\n` : "";
				case "ol":
					return children ? `${children}\n` : "";
				case "li":
					const prefix =
						node.parentElement?.tagName?.toLowerCase() === "ol" ? "1. " : "- ";
					return children ? `${prefix}${children.replace(/\n/g, " ")}\n` : "";
				case "strong":
				case "b":
					return children ? `**${children}**` : "";
				case "em":
				case "i":
					return children ? `*${children}*` : "";
				case "blockquote":
					return children ? `> ${children.replace(/\n/g, "\n> ")}\n\n` : "";
				case "a":
					const href = node.getAttribute("href") || "";
					return children && href ? `[${children}](${href})` : children;
				case "br":
					return "\n";
				case "hr":
					return "---\n\n";
				default:
					return children;
			}
		};

		const result = Array.from(element.childNodes)
			.map((node) => processNode(node))
			.filter((text) => text.trim())
			.join("")
			.trim();

		// Clean up excessive newlines
		return result.replace(/\n{3,}/g, "\n\n");
	};

	const handleCopy = async () => {
		try {
			if (contentRef?.current) {
				const markdown = extractMarkdownFromElement(contentRef.current);
				await navigator.clipboard.writeText(markdown);
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			}
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<button
			onClick={handleCopy}
			className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-colors mb-6"
		>
			{copied ? (
				<>
					<Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
					<span>Copied!</span>
				</>
			) : (
				<>
					<Copy className="w-3.5 h-3.5" />
					<span>Copy Page</span>
				</>
			)}
		</button>
	);
}
