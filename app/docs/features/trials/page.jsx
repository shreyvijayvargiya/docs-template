import Content from "../trials.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function TrialsPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/trials"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

