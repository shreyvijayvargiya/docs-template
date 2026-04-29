export default function MDXAccordionGroup({ title, children, ...props }) {
	return (
		<div className="my-6" {...props}>
			{title ? (
				<h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
					{title}
				</h3>
			) : null}
			<div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 overflow-hidden">
				<div className="divide-y divide-zinc-200 dark:divide-zinc-800">
					{children}
				</div>
			</div>
		</div>
	);
}
