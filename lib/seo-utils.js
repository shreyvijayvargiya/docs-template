// SEO utility functions for generating metadata

const SITE_NAME = "Docs Template";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";
const DEFAULT_DESCRIPTION =
	"Modern Nextjs React Tailwind Documentation Template";

/**
 * Generate page title from route
 */
export function generatePageTitle(route, pageName) {
	if (pageName) {
		return `${pageName} | ${SITE_NAME}`;
	}

	// Extract page name from route
	const segments = route.split("/").filter(Boolean);
	const lastSegment = segments[segments.length - 1];

	// Convert kebab-case to Title Case
	const title = lastSegment
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return `${title} | ${SITE_NAME}`;
}

/**
 * Generate page description from route and optional custom description
 */
export function generatePageDescription(route, customDescription) {
	if (customDescription) {
		return customDescription;
	}

	// Generate description based on route
	const segments = route.split("/").filter(Boolean);
	const section = segments[0] || "Documentation";
	const page = segments[segments.length - 1] || "Page";

	const descriptions = {
		docs: "Comprehensive documentation and guides",
		"api-reference": "API reference and endpoint documentation",
		guides: "Step-by-step tutorials and guides",
		changelog: "Version history and release notes",
		support: "Support and help resources",
	};

	const sectionDesc = descriptions[section] || "Documentation";
	return `Learn about ${page.replace(/-/g, " ")} - ${sectionDesc}`;
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(route) {
	return `${SITE_URL}${route}`;
}

/**
 * Generate full metadata object for a page
 */
export function generateMetadata(route, options = {}) {
	const {
		title: customTitle,
		description: customDescription,
		keywords,
		image,
		type = "website",
		twitterSite,
	} = options;

	const title = customTitle || generatePageTitle(route);
	const description = customDescription || generatePageDescription(route);
	const url = generateCanonicalUrl(route);
	const ogImage = image || `${SITE_URL}/og-image.png`;

	return {
		title,
		description,
		keywords: keywords || generateKeywords(route),
		alternates: {
			canonical: url,
		},
		openGraph: {
			title,
			description,
			url,
			siteName: SITE_NAME,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			locale: "en_US",
			type,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
			...(twitterSite ? { site: twitterSite } : {}),
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

/**
 * Generate keywords from route
 */
function generateKeywords(route) {
	const segments = route.split("/").filter(Boolean);
	const keywords = [SITE_NAME.toLowerCase(), "documentation"];

	segments.forEach((segment) => {
		if (segment !== "docs" && segment !== "api-reference") {
			keywords.push(segment.replace(/-/g, " "));
		}
	});

	return keywords.join(", ");
}

/**
 * Generate structured data (JSON-LD) for a page
 */
export function generateStructuredData(route, options = {}) {
	const { title, description, type = "Article" } = options;
	const url = generateCanonicalUrl(route);

	return {
		"@context": "https://schema.org",
		"@type": type,
		headline: title || generatePageTitle(route),
		description: description || generatePageDescription(route),
		url,
		publisher: {
			"@type": "Organization",
			name: SITE_NAME,
		},
	};
}
