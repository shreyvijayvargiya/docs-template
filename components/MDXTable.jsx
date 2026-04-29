export default function MDXTable({ children, ...props }) {
	return (
		<div className="my-6 w-full overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
			<table
				className="w-full min-w-[640px] border-collapse bg-white text-left text-sm dark:bg-zinc-950"
				{...props}
			>
				{children}
			</table>
		</div>
	);
}
