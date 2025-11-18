import Content from "../2024.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function Archive2024Page() {
	return (
		<MDXContent
			currentRoute="/changelog/archive/2024"
			section={navigationData.changelog}
			baseRoute="/changelog"
		>
			<Content />
		</MDXContent>
	);
}

