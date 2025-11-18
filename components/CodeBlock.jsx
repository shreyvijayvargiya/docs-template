"use client";

import { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	oneDark,
	oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../lib/theme-provider";

export default function CodeBlock({ children, className, ...props }) {
	const { theme } = useTheme();
	const [copied, setCopied] = useState(false);

	// Extract language from className (e.g., "language-javascript" -> "javascript")
	const language = className
		? className.replace("language-", "").replace("lang-", "")
		: "text";

	// Extract code string
	const codeString =
		typeof children === "string"
			? children
			: Array.isArray(children)
			? children.join("")
			: children?.props?.children || String(children);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(codeString);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const handleAIChat = () => {
		// Trigger AI chatbot open with code context
		const event = new CustomEvent("openAIChatbot", {
			detail: { code: codeString, language },
		});
		window.dispatchEvent(event);
	};

	const isDark = theme === "dark";
	const codeStyle = isDark ? oneDark : oneLight;

	return (
		<div className="relative group mb-4">
			<div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
				{/* Header with language label and action buttons */}
				<div className="flex items-center justify-between px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
					{language && language !== "text" && (
						<span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase">
							{language}
						</span>
					)}
					<div className="flex items-center gap-1.5 ml-auto">
						<button
							onClick={handleAIChat}
							className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-colors"
							aria-label="Ask AI about this code"
							title="Ask AI about this code"
						>
							<Sparkles className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
						</button>
						<button
							onClick={handleCopy}
							className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-colors"
							aria-label="Copy code"
							title="Copy code"
						>
							{copied ? (
								<Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
							) : (
								<Copy className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
							)}
						</button>
					</div>
				</div>

				{/* Code content with syntax highlighting */}
				<SyntaxHighlighter
					language={language}
					style={codeStyle}
					customStyle={{
						margin: 0,
						padding: "1rem",
						background: isDark ? "#18181b" : "#fafafa",
						fontSize: "0.875rem",
						lineHeight: "1.5",
					}}
					PreTag="div"
					{...props}
				>
					{codeString}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
