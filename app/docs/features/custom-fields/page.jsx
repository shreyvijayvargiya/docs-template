import Content from "../custom-fields.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function CustomFieldsPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/custom-fields"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

