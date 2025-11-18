import Content from "../credits.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function CreditsPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/credits"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

