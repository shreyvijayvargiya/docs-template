"use client";

import { useSidebar } from "../lib/sidebar-provider";

export default function MainShell({ children }) {
	const { desktopExpanded } = useSidebar();

	return (
		<div className="relative z-0 flex min-h-0 w-full flex-1 flex-col overflow-hidden">
			<main
				className={`relative z-0 flex min-h-0 min-w-0 max-w-7xl mx-auto hide-scrollbar flex-1 flex-col overflow-y-auto hide-scrollbar transition-[padding] duration-200 ease-out ${
					desktopExpanded ? "lg:pl-40" : "lg:pl-0"
				}`}
				style={{
					paddingTop: "2em",
				}}
			>
				<div className="flex min-h-0 flex-1 flex-col">{children}</div>
			</main>
		</div>
	);
}
