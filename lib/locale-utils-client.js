"use client";

export function setLocaleCookie(locale) {
	const maxAge = 60 * 60 * 24 * 365;
	document.cookie = `locale=${encodeURIComponent(locale)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}
