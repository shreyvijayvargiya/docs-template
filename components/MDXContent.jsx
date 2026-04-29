"use client";

import { useRef } from "react";
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
		<div className="flex w-full gap-4 gap-8 py-10 lg:flex-row lg:items-start lg:justify-between ">
			<div className="w-full min-w-0 flex flex-col lg:max-w-[720px] xl:max-w-[760px] gap-2">
			<div className="flex justify-end shrink-0">
					<CopyPageButton contentRef={contentRef} />
				</div>
				<div ref={contentRef} className="max-w-none">
					{children}
				</div>
				<PageFeedback />
				<PrevNextNav prev={prev} next={next} />
			</div>

			<aside className="hidden lg:block sitcky top-20 left-full w-56 shrink-0">
				<TableOfContents headings={headings} key={currentRoute} />
				
			</aside>
		</div>
	);
}

export default function MDXContent(props) {
	return (
		<HeadingsProvider key={props.currentRoute}>
			<MDXContentInner {...props} />
		</HeadingsProvider>
	);
}
