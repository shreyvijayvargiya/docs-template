import Content from "../llm-strategy.mdx";
import MDXContent from "../../../../../components/MDXContent";
import { navigationData } from "../../../../../lib/navigation-data";

export default function LLMStrategyPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/ingestion-strategies/llm-strategy"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

