import Content from "../billing.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function BillingPage() {
	return (
		<MDXContent
			currentRoute="/api-reference/endpoints/billing"
			section={navigationData["api-reference"]}
			baseRoute="/api-reference"
		>
			<Content />
		</MDXContent>
	);
}

