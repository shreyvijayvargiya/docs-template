"use client";

import Link from "next/link";

export default function PrivacyPage() {
	return (
		<div className="mx-auto flex min-h-[50vh] w-full max-w-3xl flex-col px-6 py-12">
			<Link
				href="/"
				className="mb-6 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
			>
				← Home
			</Link>
			<h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
				Privacy policy
			</h1>
			<div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
				<p>
					This placeholder page is for your legal team to replace with your actual
					privacy policy, data processing disclosures, region-specific notices, and
					contact details for privacy requests.
				</p>
				<p>
					Set your production URLs in{" "}
					<code className="rounded-md bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
						NEXT_PUBLIC_SITE_URL
					</code>{" "}
					and configure consent or analytics hooks as required by your jurisdictions.
				</p>
			</div>
		</div>
	);
}
