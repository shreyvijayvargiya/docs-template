import Content from "../meters.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function MetersPage() {
	return (
		<MDXContent
			currentRoute="/api-reference/endpoints/meters"
			section={navigationData["api-reference"]}
			baseRoute="/api-reference"
		>
			<Content />
		</MDXContent>
	);
}

