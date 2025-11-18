import Content from "../installation.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function InstallationPage() {
	return (
		<MDXContent
			currentRoute="/guides/getting-started/installation"
			section={navigationData.guides}
			baseRoute="/guides"
		>
			<Content />
		</MDXContent>
	);
}

