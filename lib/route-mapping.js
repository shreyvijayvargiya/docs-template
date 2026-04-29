// Hardcoded route to file mapping for all content routes
export const routeMapping = {
	// Docs routes
	"/docs/bootup/introduction": "app/docs/bootup/introduction.mdx",
	"/docs/bootup/migrate-to-docs": "app/docs/bootup/migrate-to-docs.mdx",

	"/docs/features/products": "app/Docs/Features/Products.mdx",
	"/docs/features/introduction": "app/Docs/Features/Introduction.mdx",
	"/docs/features/event-ingestion": "app/Docs/Features/Event-Ingestion.mdx",
	"/docs/features/meters": "app/Docs/Features/Meters.mdx",
	"/docs/features/credits": "app/Docs/Features/Credits.mdx",
	"/docs/features/billing": "app/Docs/Features/Billing.mdx",
	"/docs/features/cost-insights": "app/Docs/Features/Cost-Insights.mdx",
	"/docs/features/benefits": "app/Docs/Features/Benefits.mdx",
	"/docs/features/checkout": "app/Docs/Features/Checkout.mdx",
	"/docs/features/trials": "app/Docs/Features/Trials.mdx",
	"/docs/features/seat-based-pricing":
		"app/Docs/Features/Seat-Based-Pricing.mdx",
	"/docs/features/custom-fields": "app/Docs/Features/Custom-Fields.mdx",
	"/docs/features/discounts": "app/Docs/Features/Discounts.mdx",

	// Nested: features/ingestion-strategies/*
	"/docs/features/ingestion-strategies/strategy-introduction":
		"app/Docs/Features/Ingestion-Strategies/Strategy-Introduction.mdx",
	"/docs/features/ingestion-strategies/llm-strategy":
		"app/Docs/Features/Ingestion-Strategies/LLM-Strategy.mdx",
	"/docs/features/ingestion-strategies/s3-strategy":
		"app/Docs/Features/Ingestion-Strategies/S3-Strategy.mdx",
	"/docs/features/ingestion-strategies/stream-strategy":
		"app/Docs/Features/Ingestion-Strategies/Stream-Strategy.mdx",
	"/docs/features/ingestion-strategies/delta-time-strategy":
		"app/Docs/Features/Ingestion-Strategies/Delta-Time-Strategy.mdx",

	// API Reference routes
	"/api-reference/authentication/getting-started":
		"app/Api-Reference/Authentication/Getting-Started.mdx",
	"/api-reference/authentication/api-keys":
		"app/Api-Reference/Authentication/API-Keys.mdx",
	"/api-reference/authentication/oauth":
		"app/Api-Reference/Authentication/OAuth.mdx",

	"/api-reference/endpoints/products":
		"app/Api-Reference/Endpoints/Products.mdx",
	"/api-reference/endpoints/meters": "app/Api-Reference/Endpoints/Meters.mdx",
	"/api-reference/endpoints/billing": "app/Api-Reference/Endpoints/Billing.mdx",
	"/api-reference/endpoints/webhooks":
		"app/Api-Reference/Endpoints/Webhooks.mdx",
	"/api-reference/endpoints/speech-to-text-rest-api":
		"app/api-reference/endpoints/speech-to-text-rest-api.mdx",

	// Guides routes
	"/guides/getting-started/quick-start":
		"app/Guides/Getting-Started/Quick-Start.mdx",
	"/guides/getting-started/installation":
		"app/Guides/Getting-Started/Installation.mdx",
	"/guides/getting-started/configuration":
		"app/Guides/Getting-Started/Configuration.mdx",

	"/guides/tutorials/building-your-first-app":
		"app/Guides/Tutorials/Building-Your-First-App.mdx",
	"/guides/tutorials/advanced-patterns":
		"app/Guides/Tutorials/Advanced-Patterns.mdx",
	"/guides/tutorials/best-practices": "app/Guides/Tutorials/Best-Practices.mdx",

	// Changelog routes
	"/changelog/releases/latest": "app/Changelog/Releases/Latest.mdx",
	"/changelog/releases/v2-0-0": "app/Changelog/Releases/v2-0-0.mdx",
	"/changelog/releases/v1-5-0": "app/Changelog/Releases/v1-5-0.mdx",
	"/changelog/releases/v1-0-0": "app/Changelog/Releases/v1-0-0.mdx",

	"/changelog/archive/2024": "app/Changelog/Archive/2024.mdx",
	"/changelog/archive/2023": "app/Changelog/Archive/2023.mdx",

	// Support routes
	"/support/support": "app/Support/Support.mdx",
};

// Helper function to get file path from route
export function getFilePathFromRoute(route) {
	return routeMapping[route] || null;
}

// Helper function to build route from slug array
export function buildRouteFromSlug(baseRoute, slugArray) {
	if (!slugArray || slugArray.length === 0) {
		return baseRoute;
	}
	const slugPath = Array.isArray(slugArray) ? slugArray.join("/") : slugArray;
	return `${baseRoute}/${slugPath}`;
}
