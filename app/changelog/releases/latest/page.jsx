import Content from "../latest.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function LatestPage() {
	return (
		<MDXContent
			currentRoute="/changelog/releases/latest"
			section={navigationData.changelog}
			baseRoute="/changelog"
		>
			<Content />
		</MDXContent>
	);
}

