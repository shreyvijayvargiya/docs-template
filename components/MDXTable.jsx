export default function MDXTable({ children, ...props }) {
	return (
		<div className="my-4 overflow-x-auto">
			<table
				className="w-full border-collapse border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden"
				{...props}
			>
				{children}
			</table>
		</div>
	);
}
