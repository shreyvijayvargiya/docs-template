"use client";

import { generateStructuredData } from "../lib/seo-utils";

/**
 * StructuredData component for adding JSON-LD schema markup
 * This improves SEO by providing structured data to search engines
 */
export default function StructuredData({ route, title, description, type }) {
	const structuredData = generateStructuredData(route, {
		title,
		description,
		type,
	});

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
