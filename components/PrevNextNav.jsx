"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PrevNextNav({ prev, next }) {
	if (!prev && !next) return null;

	return (
		<div className="my-12 py-8 dark:border-zinc-800 gap-4">
			<div className="flex items-center justify-between gap-4">
				{prev ? (
					<Link
						href={prev.route}
						className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group"
					>
						<ChevronLeft className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
						<span className="text-xs text-zinc-500 dark:text-zinc-400">
							Previous |
						</span>
						<span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
							{prev.itemName}
						</span>
					</Link>
				) : (
					<div></div>
				)}
				{next ? (
					<Link
						href={next.route}
						className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group ml-auto"
					>
						<span className="text-xs text-zinc-500 dark:text-zinc-400">
							Next |
						</span>
						<span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
							{next.itemName}
						</span>
						<ChevronRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
					</Link>
				) : null}
			</div>
		</div>
	);
}
