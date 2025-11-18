import Content from "../discounts.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function DiscountsPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/discounts"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

