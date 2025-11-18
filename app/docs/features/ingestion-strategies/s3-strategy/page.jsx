import Content from "../s3-strategy.mdx";
import MDXContent from "../../../../../components/MDXContent";
import { navigationData } from "../../../../../lib/navigation-data";

export default function S3StrategyPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/ingestion-strategies/s3-strategy"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

