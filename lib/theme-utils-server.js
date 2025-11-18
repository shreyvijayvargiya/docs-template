import { cookies } from "next/headers";

const THEME_COOKIE_NAME = "theme";

export async function getThemeFromCookie() {
	try {
		const cookieStore = await cookies();
		const theme = cookieStore.get(THEME_COOKIE_NAME);
		return theme?.value || null;
	} catch (error) {
		// If cookies() fails (e.g., in middleware), return null
		return null;
	}
}

