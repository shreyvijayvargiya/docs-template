import Content from "../seat-based-pricing.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function SeatBasedPricingPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/seat-based-pricing"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

