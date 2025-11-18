import MDXHeading from "./components/MDXHeading";
import CodeBlock from "./components/CodeBlock";
import MDXTable from "./components/MDXTable";
import MDXMessage from "./components/MDXMessage";
import MDXCard from "./components/MDXCard";
import CodeTabs from "./components/CodeTabs";

const mdxComponents = {
	h1: (props) => <MDXHeading level={1} {...props} />,
	h2: (props) => <MDXHeading level={2} {...props} />,
	h3: (props) => <MDXHeading level={3} {...props} />,
	p: ({ children, ...props }) => (
		<p
			className="mb-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
			{...props}
		>
			{children}
		</p>
	),
	code: ({ children, className, ...props }) => {
		const isInline = !className || !className.includes("language-");
		if (isInline) {
			return (
				<code
					className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-sm font-mono text-zinc-900 dark:text-zinc-100"
					{...props}
				>
					{children}
				</code>
			);
		}
		// For code blocks, render with CodeBlock component
		return (
			<CodeBlock className={className} {...props}>
				{children}
			</CodeBlock>
		);
	},
	pre: ({ children, ...props }) => {
		// If pre contains code, let code component handle it
		if (children?.props?.className) {
			return <>{children}</>;
		}
		return (
			<pre className="mb-4 rounded-xl overflow-hidden" {...props}>
				{children}
			</pre>
		);
	},
	ul: ({ children, ...props }) => (
		<ul
			className="mb-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300 pl-6"
			style={{ listStyleType: "disc", listStylePosition: "inside" }}
			{...props}
		>
			{children}
		</ul>
	),
	ol: ({ children, ...props }) => (
		<ol
			className="mb-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300 pl-6"
			style={{ listStyleType: "decimal", listStylePosition: "inside" }}
			{...props}
		>
			{children}
		</ol>
	),
	li: ({ children, ...props }) => (
		<li className="pl-2" style={{ display: "list-item" }} {...props}>
			{children}
		</li>
	),
	blockquote: ({ children, ...props }) => (
		<blockquote
			className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic my-3 text-sm text-zinc-700 dark:text-zinc-300"
			{...props}
		>
			{children}
		</blockquote>
	),
	strong: ({ children, ...props }) => (
		<strong
			className="font-semibold text-zinc-900 dark:text-zinc-100"
			{...props}
		>
			{children}
		</strong>
	),
	em: ({ children, ...props }) => (
		<em className="italic" {...props}>
			{children}
		</em>
	),
	table: (props) => <MDXTable {...props} />,
	thead: ({ children, ...props }) => (
		<thead className="bg-zinc-100 dark:bg-zinc-800" {...props}>
			{children}
		</thead>
	),
	tbody: ({ children, ...props }) => (
		<tbody className="divide-y divide-zinc-200 dark:divide-zinc-800" {...props}>
			{children}
		</tbody>
	),
	tr: ({ children, ...props }) => (
		<tr
			className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
			{...props}
		>
			{children}
		</tr>
	),
	th: ({ children, ...props }) => (
		<th
			className="px-4 py-2 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800"
			{...props}
		>
			{children}
		</th>
	),
	td: ({ children, ...props }) => (
		<td
			className="px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-800"
			{...props}
		>
			{children}
		</td>
	),
	Message: ({ type, children, ...props }) => (
		<MDXMessage type={type} {...props}>
			{children}
		</MDXMessage>
	),
	Card: ({ icon, title, description, children, ...props }) => (
		<MDXCard icon={icon} title={title} description={description} {...props}>
			{children}
		</MDXCard>
	),
	CodeTabs: ({ tabs, ...props }) => <CodeTabs tabs={tabs} {...props} />,
};

export function useMDXComponents(components) {
	return { ...mdxComponents, ...components };
}
