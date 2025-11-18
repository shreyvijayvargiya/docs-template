import fs from "fs";
import path from "path";
import { getFilePathFromRoute, buildRouteFromSlug } from "./route-mapping";

export async function getContentFromRoute(baseRoute, slug) {
	const slugArray = Array.isArray(slug) ? slug : [slug];
	const route = buildRouteFromSlug(baseRoute, slugArray);

	console.log("📖 [Content Reader] Base route:", baseRoute);
	console.log("📖 [Content Reader] Slug array:", slugArray);
	console.log("📖 [Content Reader] Built route:", route);

	// Get file path from route mapping
	const filePath = getFilePathFromRoute(route);

	if (!filePath) {
		console.error("❌ [Content Reader] No mapping found for route:", route);
		return null;
	}

	console.log("📖 [Content Reader] Mapped file path:", filePath);

	// Construct full path
	const fullPath = path.join(process.cwd(), filePath);
	console.log("📖 [Content Reader] Full file path:", fullPath);

	// Check if file exists
	if (!fs.existsSync(fullPath)) {
		console.error("❌ [Content Reader] File does not exist:", fullPath);

		// Try alternative paths
		const altPaths = [fullPath.replace(".mdx", ".md")];

		for (const altPath of altPaths) {
			console.log("🔍 [Content Reader] Trying alternative:", altPath);
			if (fs.existsSync(altPath)) {
				console.log("✅ [Content Reader] Found alternative path");
				return fs.readFileSync(altPath, "utf8");
			}
		}

		return null;
	}

	try {
		console.log("✅ [Content Reader] Reading file...");
		const content = fs.readFileSync(fullPath, "utf8");
		console.log(
			"✅ [Content Reader] File read successfully, length:",
			content.length
		);
		return content;
	} catch (error) {
		console.error("❌ [Content Reader] Error reading file:", error.message);
		return null;
	}
}
