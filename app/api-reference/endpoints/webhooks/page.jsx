import Content from "../webhooks.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function WebhooksPage() {
	return (
		<MDXContent
			currentRoute="/api-reference/endpoints/webhooks"
			section={navigationData["api-reference"]}
			baseRoute="/api-reference"
		>
			<Content />
		</MDXContent>
	);
}

