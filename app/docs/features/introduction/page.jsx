import Content from "../introduction.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function IntroductionPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/introduction"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
