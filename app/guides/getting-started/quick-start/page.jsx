import Content from "../quick-start.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function QuickStartPage() {
	return (
		<MDXContent
			currentRoute="/guides/getting-started/quick-start"
			section={navigationData.guides}
			baseRoute="/guides"
		>
			<Content />
		</MDXContent>
	);
}

