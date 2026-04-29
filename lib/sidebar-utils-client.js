"use client";

export function setSidebarDesktopCookie(expanded) {
	const maxAge = 60 * 60 * 24 * 365;
	const value = expanded ? "1" : "0";
	document.cookie = `sidebar_desktop=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function readSidebarDesktopFromCookie() {
	if (typeof window === "undefined") return true;
	const row = document.cookie
		.split("; ")
		.find((r) => r.startsWith("sidebar_desktop="));
	if (!row) return true;
	const v = row.split("=")[1];
	return v !== "0";
}
