import Content from "../cost-insights.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function CostInsightsPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/cost-insights"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

