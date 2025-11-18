import Content from "../benefits.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function BenefitsPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/benefits"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
