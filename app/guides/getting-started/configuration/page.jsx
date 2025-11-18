import Content from "../configuration.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function ConfigurationPage() {
	return (
		<MDXContent
			currentRoute="/guides/getting-started/configuration"
			section={navigationData.guides}
			baseRoute="/guides"
		>
			<Content />
		</MDXContent>
	);
}

