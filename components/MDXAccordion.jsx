"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function MDXAccordion({ title, children, ...props }) {
	const [open, setOpen] = useState(false);

	return (
		<div {...props}>
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-900/60"
				aria-expanded={open}
			>
				<ChevronRight
					className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform dark:text-zinc-400 ${
						open ? "rotate-90" : ""
					}`}
				/>
				<span>{title}</span>
			</button>
			{open ? (
				<div className="border-t border-zinc-100 bg-zinc-50/80 px-4 pb-4 pt-2 pl-11 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
					{children}
				</div>
			) : null}
		</div>
	);
}
