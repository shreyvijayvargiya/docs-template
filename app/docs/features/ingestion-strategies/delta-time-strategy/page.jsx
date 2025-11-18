import Content from "../delta-time-strategy.mdx";
import MDXContent from "../../../../../components/MDXContent";
import { navigationData } from "../../../../../lib/navigation-data";

export default function DeltaTimeStrategyPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/ingestion-strategies/delta-time-strategy"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

