import Content from "../migrate-to-docs.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function MigrateToDocsPage() {
	return (
		<MDXContent
			currentRoute="/docs/bootup/migrate-to-docs"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
