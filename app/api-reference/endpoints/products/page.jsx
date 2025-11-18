import Content from "../products.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function ProductsPage() {
	return (
		<MDXContent
			currentRoute="/api-reference/endpoints/products"
			section={navigationData["api-reference"]}
			baseRoute="/api-reference"
		>
			<Content />
		</MDXContent>
	);
}

