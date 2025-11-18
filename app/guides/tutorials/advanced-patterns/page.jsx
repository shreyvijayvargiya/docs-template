import Content from "../advanced-patterns.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function AdvancedPatternsPage() {
	return (
		<MDXContent
			currentRoute="/guides/tutorials/advanced-patterns"
			section={navigationData.guides}
			baseRoute="/guides"
		>
			<Content />
		</MDXContent>
	);
}

