const THEME_COOKIE_NAME = "theme";

export function setThemeCookie(theme) {
	// This will be called from client-side
	if (typeof document !== "undefined") {
		document.cookie = `${THEME_COOKIE_NAME}=${theme}; path=/; max-age=31536000; SameSite=Lax`;
	}
}

