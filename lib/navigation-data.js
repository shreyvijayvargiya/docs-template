// Navigation data structure for all sections
export const navigationData = {
	docs: [
		{
			heading: "Bootup",
			items: [
				{ name: "Introduction", hasDropdown: false },
				{ name: "Migrate to Polar", hasDropdown: false },
			],
		},
		{
			heading: "Features",
			items: [
				{ name: "Products", hasDropdown: false },
				{
					name: "Usage Based Billing",
					hasDropdown: true,
					key: "usageBasedBilling",
					subItems: [],
				},
				{ name: "Introduction", hasDropdown: false },
				{ name: "Event Ingestion", hasDropdown: false },
				{
					name: "Ingestion Strategies",
					hasDropdown: true,
					key: "ingestionStrategies",
					subItems: [
						"Strategy Introduction",
						"LLM Strategy",
						"S3 Strategy",
						"Stream Strategy",
						"Delta Time Strategy",
					],
				},
				{ name: "Meters", hasDropdown: false },
				{ name: "Credits", hasDropdown: false },
				{ name: "Billing", hasDropdown: false },
				{
					name: "Cost Insights",
					hasDropdown: false,
					badge: "Beta",
					hasArrow: true,
				},
				{ name: "Benefits", hasDropdown: false, hasArrow: true },
				{ name: "Checkout", hasDropdown: false, hasArrow: true },
				{ name: "Trials", hasDropdown: false },
				{ name: "Seat-Based Pricing", hasDropdown: false },
				{ name: "Custom Fields", hasDropdown: false },
				{ name: "Discounts", hasDropdown: false },
			],
		},
	],
	"api-reference": [
		{
			heading: "Authentication",
			items: [
				{ name: "Getting Started", hasDropdown: false },
				{ name: "API Keys", hasDropdown: false },
				{ name: "OAuth", hasDropdown: false },
			],
		},
		{
			heading: "Endpoints",
			items: [
				{ name: "Products", hasDropdown: false },
				{ name: "Meters", hasDropdown: false },
				{ name: "Billing", hasDropdown: false },
				{ name: "Webhooks", hasDropdown: false },
			],
		},
	],
	guides: [
		{
			heading: "Getting Started",
			items: [
				{ name: "Quick Start", hasDropdown: false },
				{ name: "Installation", hasDropdown: false },
				{ name: "Configuration", hasDropdown: false },
			],
		},
		{
			heading: "Tutorials",
			items: [
				{ name: "Building Your First App", hasDropdown: false },
				{ name: "Advanced Patterns", hasDropdown: false },
				{ name: "Best Practices", hasDropdown: false },
			],
		},
	],
	changelog: [
		{
			heading: "Releases",
			items: [
				{ name: "Latest", hasDropdown: false },
				{ name: "v2.0.0", hasDropdown: false },
				{ name: "v1.5.0", hasDropdown: false },
				{ name: "v1.0.0", hasDropdown: false },
			],
		},
		{
			heading: "Archive",
			items: [
				{ name: "2024", hasDropdown: false },
				{ name: "2023", hasDropdown: false },
			],
		},
	],
	support: [
		{
			heading: "",
			items: [{ name: "Support", hasDropdown: false }],
		},
	],
};

// Helper function to generate slug from name
function generateSlug(name) {
	return name.toLowerCase().replace(/\s+/g, "-");
}

// Helper function to generate route path
function getRoutePath(baseRoute, heading, itemName, parentName = null) {
	const headingSlug = generateSlug(heading);
	const itemSlug = generateSlug(itemName);

	// Handle Support routes (simpler structure)
	if (baseRoute === "/support" && !heading) {
		return `${baseRoute}/${itemSlug}`;
	}

	// Handle nested paths (e.g., Ingestion Strategies sub-items)
	if (parentName) {
		const parentSlug = generateSlug(parentName);
		return `${baseRoute}/${headingSlug}/${parentSlug}/${itemSlug}`;
	}

	// If heading is empty, just use item slug
	if (!heading || headingSlug === "") {
		return `${baseRoute}/${itemSlug}`;
	}

	return `${baseRoute}/${headingSlug}/${itemSlug}`;
}

// Flatten navigation structure to get all items in order
export function flattenNavigation(section, baseRoute) {
	const items = [];
	
	for (const navSection of section) {
		for (const item of navSection.items) {
			if (item.hasDropdown && item.subItems) {
				// Add parent item (non-clickable, but we track it)
				for (const subItem of item.subItems) {
					items.push({
						heading: navSection.heading,
						itemName: subItem,
						parentName: item.name,
						route: getRoutePath(baseRoute, navSection.heading, subItem, item.name),
					});
				}
			} else {
				items.push({
					heading: navSection.heading,
					itemName: item.name,
					parentName: null,
					route: getRoutePath(baseRoute, navSection.heading, item.name),
				});
			}
		}
	}
	
	return items;
}

// Get previous and next navigation items
export function getPrevNext(section, baseRoute, currentRoute) {
	const allItems = flattenNavigation(section, baseRoute);
	const currentIndex = allItems.findIndex((item) => item.route === currentRoute);
	
	return {
		prev: currentIndex > 0 ? allItems[currentIndex - 1] : null,
		next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null,
	};
}

// Get the first route for a section
export function getFirstRoute(section, baseRoute) {
	const allItems = flattenNavigation(section, baseRoute);
	return allItems.length > 0 ? allItems[0].route : baseRoute;
}

