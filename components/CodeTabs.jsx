"use client";

import { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	oneDark,
	oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../lib/theme-provider";

export default function CodeTabs({ tabs = [], ...props }) {
	const { theme } = useTheme();
	const [activeTab, setActiveTab] = useState(0);
	const [copied, setCopied] = useState(false);

	if (!tabs || tabs.length === 0) return null;

	const activeTabData = tabs[activeTab];
	const isDark = theme === "dark";
	const codeStyle = isDark ? oneDark : oneLight;

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(activeTabData.code);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const handleAIChat = () => {
		const event = new CustomEvent("openAIChatbot", {
			detail: { code: activeTabData.code, language: activeTabData.language },
		});
		window.dispatchEvent(event);
	};

	return (
		<div className="relative group mb-4">
			<div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
				{/* Tabs */}
				<div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
					<div className="flex items-center">
						{tabs.map((tab, index) => (
							<button
								key={index}
								onClick={() => setActiveTab(index)}
								className={`px-4 py-2 text-xs font-medium transition-colors ${
									activeTab === index
										? "bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-900 dark:border-zinc-100"
										: "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700"
								}`}
							>
								{tab.label || tab.language}
							</button>
						))}
					</div>
					<div className="flex items-center gap-1.5 pr-4">
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

				{/* Code content */}
				<SyntaxHighlighter
					language={activeTabData.language || "text"}
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
					{activeTabData.code}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
