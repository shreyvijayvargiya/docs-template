import Content from "../stream-strategy.mdx";
import MDXContent from "../../../../../components/MDXContent";
import { navigationData } from "../../../../../lib/navigation-data";

export default function StreamStrategyPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/ingestion-strategies/stream-strategy"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

