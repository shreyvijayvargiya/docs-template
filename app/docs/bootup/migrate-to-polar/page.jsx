import Content from "../migrate-to-Docs.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function MigrateToDocsPage() {
	return (
		<MDXContent
			currentRoute="/docs/bootup/migrate-to-Docs"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
