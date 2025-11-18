import Content from "../strategy-introduction.mdx";
import MDXContent from "../../../../../components/MDXContent";
import { navigationData } from "../../../../../lib/navigation-data";

export default function StrategyIntroductionPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/ingestion-strategies/strategy-introduction"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
