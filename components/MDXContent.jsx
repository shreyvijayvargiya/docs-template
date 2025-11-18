"use client";

import { useEffect, useRef } from "react";
import PrevNextNav from "./PrevNextNav";
import TableOfContents from "./TableOfContents";
import CopyPageButton from "./CopyPageButton";
import PageFeedback from "./PageFeedback";
import { getPrevNext } from "../lib/navigation-data";
import { HeadingsProvider, useHeadings } from "../lib/headings-context";

function MDXContentInner({ children, currentRoute, section, baseRoute }) {
	const { prev, next } = getPrevNext(section, baseRoute, currentRoute);
	const { headings } = useHeadings();
	const contentRef = useRef(null);

	return (
		<div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
			<div className="p-10 flex justify-center">
				{/* Spacer for centering when TOC is visible */}
				<div className="hidden xl:block w-64 flex-shrink-0" />

				{/* Main Content - Fixed Width */}
				<main className="w-[800px] flex-shrink-0">
					<br />
					<div className="flex justify-end">
						<CopyPageButton contentRef={contentRef} />
					</div>
					<div ref={contentRef} className="max-w-none">
						{children}
					</div>
					<br />
					<PageFeedback />
					<br />
					<PrevNextNav prev={prev} next={next} />
				</main>

				{/* Table of Contents - Right Side */}
				<aside className="hidden xl:block w-fit flex-shrink-0 ml-8">
					<TableOfContents headings={headings} key={currentRoute} />
				</aside>
			</div>
		</div>
	);
}

export default function MDXContent(props) {
	return (
		<HeadingsProvider>
			<MDXContentInner {...props} />
		</HeadingsProvider>
	);
}
