import Content from "../migrate-to-polar.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function MigrateToPolarPage() {
	return (
		<MDXContent
			currentRoute="/docs/bootup/migrate-to-polar"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
