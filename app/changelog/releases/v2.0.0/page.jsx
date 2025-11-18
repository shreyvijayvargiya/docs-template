import Content from "../v2-0-0.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function V200Page() {
	return (
		<MDXContent
			currentRoute="/changelog/releases/v2-0-0"
			section={navigationData.changelog}
			baseRoute="/changelog"
		>
			<Content />
		</MDXContent>
	);
}

