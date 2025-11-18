import Content from "../v1-0-0.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function V100Page() {
	return (
		<MDXContent
			currentRoute="/changelog/releases/v1-0-0"
			section={navigationData.changelog}
			baseRoute="/changelog"
		>
			<Content />
		</MDXContent>
	);
}

