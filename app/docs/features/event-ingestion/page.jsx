import Content from "../event-ingestion.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function EventIngestionPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/event-ingestion"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
