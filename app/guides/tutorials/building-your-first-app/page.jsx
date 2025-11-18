import Content from "../building-your-first-app.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function BuildingYourFirstAppPage() {
	return (
		<MDXContent
			currentRoute="/guides/tutorials/building-your-first-app"
			section={navigationData.guides}
			baseRoute="/guides"
		>
			<Content />
		</MDXContent>
	);
}

