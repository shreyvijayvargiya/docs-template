import Content from "../oauth.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function OAuthPage() {
	return (
		<MDXContent
			currentRoute="/api-reference/authentication/oauth"
			section={navigationData["api-reference"]}
			baseRoute="/api-reference"
		>
			<Content />
		</MDXContent>
	);
}

