import Content from "../meters.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function MetersPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/meters"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

