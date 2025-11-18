import Content from "../introduction.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";
import { generateMetadata as generateSEOMetadata } from "../../../../lib/seo-utils";

export const metadata = generateSEOMetadata("/docs/bootup/introduction", {
	title: "Introduction | Bootup",
	description:
		"Get started with our platform. Learn the basics and understand fundamental concepts before diving deeper into advanced features.",
	keywords: "introduction, getting started, bootup, documentation",
});

export default function IntroductionPage() {
	return (
		<MDXContent
			currentRoute="/docs/bootup/introduction"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
