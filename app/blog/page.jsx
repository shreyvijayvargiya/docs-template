"use client";

import Link from "next/link";

export default function BlogPage() {
	return (
		<div className="mx-auto flex min-h-[50vh] w-full max-w-3xl flex-col px-6 py-12">
			<Link
				href="/"
				className="mb-6 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
			>
				← Home
			</Link>
			<h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
				Blog
			</h1>
			<p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
				Replace this page with your product blog or CMS-driven posts. Link it from
				the footer or navigation when your blog is ready.
			</p>
		</div>
	);
}
