import Content from "../Support.mdx";
import MDXContent from "../../../components/MDXContent";
import { navigationData } from "../../../lib/navigation-data";

export default function SupportPage() {
	return (
		<MDXContent
			currentRoute="/support/support"
			section={navigationData.support}
			baseRoute="/support"
		>
			<Content />
		</MDXContent>
	);
}

