import Content from "../getting-started.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function GettingStartedPage() {
	return (
		<MDXContent
			currentRoute="/api-reference/authentication/getting-started"
			section={navigationData["api-reference"]}
			baseRoute="/api-reference"
		>
			<Content />
		</MDXContent>
	);
}

