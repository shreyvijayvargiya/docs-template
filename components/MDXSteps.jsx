"use client";

import { Children, cloneElement, isValidElement } from "react";

export function MDXSteps({ children }) {
	const items = Children.toArray(children).filter(isValidElement);
	return (
		<div className="p-8">
			<ol className="relative space-y-0">
				{items.map((child, i) =>
					isValidElement(child)
						? cloneElement(child, {
								key: i,
								stepIndex: i + 1,
								isLast: i === items.length - 1,	
							})
						: null
				)}
			</ol>
		</div>
	);
}

export function MDXStep({ title, children, stepIndex, isLast = false }) {
	const n = stepIndex ?? 1;
	return (
		<li
			className={`relative pb-8 ${isLast ? "pb-0" : ""}`}
			style={{ listStyle: "none" }}
		>
			<span
				className="-left-[25px] absolute top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-zinc-300 bg-white text-xs font-semibold text-zinc-900 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
				aria-hidden
			>
				{n}
			</span>
			<div className="space-y-2 px-4">
				<h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
					{title}
				</h4>
				{children ? (
					<div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 [&_p]:mb-3 [&_p:last-child]:mb-0">
						{children}
					</div>
				) : null}
			</div>
		</li>
	);
}
