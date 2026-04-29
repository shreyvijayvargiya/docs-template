import { cookies } from "next/headers";

const SUPPORTED = new Set(["en", "es"]);

export async function getLocaleFromCookie() {
	try {
		const store = await cookies();
		const value = store.get("locale")?.value;
		return SUPPORTED.has(value) ? value : "en";
	} catch {
		return "en";
	}
}
