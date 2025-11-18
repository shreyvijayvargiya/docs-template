"use client";

import * as Icons from "lucide-react";

export default function MDXCard({ icon, title, description, children, ...props }) {
	// Handle icon as string (icon name) or React component
	let IconComponent = null;
	if (icon) {
		if (typeof icon === "string") {
			IconComponent = Icons[icon] || null;
		} else {
			IconComponent = icon;
		}
	}

	return (
		<div
			className="my-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
			{...props}
		>
			{IconComponent && (
				<div className="mb-3 text-zinc-600 dark:text-zinc-400">
					<IconComponent className="w-5 h-5" />
				</div>
			)}
			{title && (
				<h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
					{title}
				</h4>
			)}
			{description && (
				<p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
					{description}
				</p>
			)}
			{children && <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>}
		</div>
	);
}

