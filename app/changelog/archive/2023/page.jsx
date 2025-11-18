import Content from "../2023.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function Archive2023Page() {
	return (
		<MDXContent
			currentRoute="/changelog/archive/2023"
			section={navigationData.changelog}
			baseRoute="/changelog"
		>
			<Content />
		</MDXContent>
	);
}

