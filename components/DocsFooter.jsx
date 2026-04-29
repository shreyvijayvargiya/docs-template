"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { navigationData, getFirstRoute } from "../lib/navigation-data";
import SocialIconLinks from "./SocialIconLinks";

const currentYear = new Date().getFullYear();

export default function DocsFooter() {
	const { t } = useTranslation("common");

	const docsFirst = getFirstRoute(navigationData.docs, "/docs");
	const apiFirst = getFirstRoute(
		navigationData["api-reference"],
		"/api-reference",
	);
	const guidesFirst = getFirstRoute(navigationData.guides, "/guides");

	return (
		<footer className="mt-10 w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
			<div className="flex flex-wrap justify-between gap-8 p-10 max-w-7xl mx-auto">
				<div className="md:p-10 p-0">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"
					>
						<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100">
							<span className="h-3 w-3 rounded-full bg-white dark:bg-zinc-900" />
						</span>
						{t("footer.brand")}
					</Link>
					<p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
						{t("footer.tagline")}
					</p>
				</div>

				<div>
					<h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
						{t("footer.product")}
					</h3>
					<ul className="mt-4 space-y-3 text-sm">
						<li>
							<Link
								href={docsFirst}
								className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
							>
								{t("footer.linkDocs")}
							</Link>
						</li>
						<li>
							<Link
								href={apiFirst}
								className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
							>
								{t("footer.linkApi")}
							</Link>
						</li>
						<li>
							<Link
								href={guidesFirst}
								className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
							>
								{t("footer.linkGuides")}
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
						{t("footer.resources")}
					</h3>
					<ul className="mt-4 space-y-3 text-sm">
						<li>
							<Link
								href="/blog"
								className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
							>
								{t("footer.linkBlog")}
							</Link>
						</li>
						<li>
							<Link
								href="/changelog/releases/latest"
								className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
							>
								{t("footer.linkChangelog")}
							</Link>
						</li>
						<li>
							<Link
								href={getFirstRoute(
									navigationData.support,
									"/support",
								)}
								className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
							>
								{t("footer.linkSupport")}
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
						{t("footer.legal")}
					</h3>
					<ul className="mt-4 space-y-3 text-sm">
						<li>
							<Link
								href="/privacy"
								className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
							>
								{t("footer.linkPrivacy")}
							</Link>
						</li>
					</ul>
					<div className="mt-6">
						<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
							{t("footer.follow")}
						</p>
						<SocialIconLinks className="justify-start" />
					</div>
				</div>
			</div>

			<div
				className={`border-t py-4 border-zinc-200 py-2 dark:border-zinc-800`}
			>
				<p className="md:text-center text-xs text-zinc-500 dark:text-zinc-400 sm:text-left">
					© {currentYear} {t("footer.brand")}. {t("footer.rights")}
				</p>
			</div>
		</footer>
	);
}
