import Content from "../checkout.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function CheckoutPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/checkout"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}

