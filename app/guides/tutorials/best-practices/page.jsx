import Content from "../best-practices.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function BestPracticesPage() {
	return (
		<MDXContent
			currentRoute="/guides/tutorials/best-practices"
			section={navigationData.guides}
			baseRoute="/guides"
		>
			<Content />
		</MDXContent>
	);
}

