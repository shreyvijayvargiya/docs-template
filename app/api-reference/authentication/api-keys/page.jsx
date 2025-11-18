import Content from "../api-keys.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function APIKeysPage() {
	return (
		<MDXContent
			currentRoute="/api-reference/authentication/api-keys"
			section={navigationData["api-reference"]}
			baseRoute="/api-reference"
		>
			<Content />
		</MDXContent>
	);
}

