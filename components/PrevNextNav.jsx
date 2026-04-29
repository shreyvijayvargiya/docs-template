"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SocialIconLinks from "./SocialIconLinks";

export default function PrevNextNav({ prev, next }) {
	if (!prev && !next) return null;

	const prevLink = prev ? (
		<Link
			href={prev.route}
			className="flex min-w-0 max-w-full items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 group"
		>
			<ChevronLeft className="h-4 w-4 shrink-0 text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100" />
			<span className="min-w-0 truncate text-xs text-zinc-500 dark:text-zinc-400">
				Previous |
			</span>
			<span className="min-w-0 truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
				{prev.itemName}
			</span>
		</Link>
	) : null;

	const nextLink = next ? (
		<Link
			href={next.route}
			className="flex min-w-0 max-w-full items-center justify-end gap-2 rounded-xl bg-zinc-100 px-4 py-2 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 group sm:ml-auto"
		>
			<span className="min-w-0 truncate text-xs text-zinc-500 dark:text-zinc-400">
				Next |
			</span>
			<span className="min-w-0 truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
				{next.itemName}
			</span>
			<ChevronRight className="h-4 w-4 shrink-0 text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100" />
		</Link>
	) : null;

	return (
		<div className="py-12">
			<div className="w-full flex justify-between items-center gap-4 sm:gap-4">
				<div className="flex min-h-[2.75rem] min-w-0 items-center justify-start">
					{prevLink}
				</div>

				<div className="flex justify-center sm:px-2">
					<SocialIconLinks />
				</div>

				<div className="flex min-h-[2.75rem] min-w-0 items-center justify-end">
					{nextLink}
				</div>
			</div>
		</div>
	);
}
