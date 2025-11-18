import Content from "../billing.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function BillingPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/billing"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
