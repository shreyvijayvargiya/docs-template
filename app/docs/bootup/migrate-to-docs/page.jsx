import Content from "../migrate-to-docs.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";
import { generateMetadata as generateSEOMetadata } from "../../../../lib/seo-utils";

export const metadata = generateSEOMetadata("/docs/bootup/migrate-to-docs", {
	title: "Migrate to Docs",
	description:
		"Learn how to migrate to our documentation platform. Step-by-step guide for transitioning from other documentation systems.",
	keywords: "migration, migrate, docs, documentation, transition",
});

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
