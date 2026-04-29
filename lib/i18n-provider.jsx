"use client";

import { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import en from "../locales/en/common.json";
import es from "../locales/es/common.json";
import { setLocaleCookie } from "./locale-utils-client";

const resources = {
	en: { common: en },
	es: { common: es },
};

export function readStoredLocale() {
	if (typeof window === "undefined") return "en";
	try {
		const fromCookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith("locale="))
			?.split("=")[1];
		const decoded = fromCookie ? decodeURIComponent(fromCookie) : null;
		if (decoded === "en" || decoded === "es") return decoded;
		const ls = localStorage.getItem("locale");
		if (ls === "en" || ls === "es") return ls;
	} catch (_) {}
	return "en";
}

if (!i18n.isInitialized) {
	i18n.use(initReactI18next).init({
		resources,
		lng: "en",
		fallbackLng: "en",
		defaultNS: "common",
		ns: ["common"],
		interpolation: { escapeValue: false },
		react: { useSuspense: false },
	});
}

export function I18nProvider({ children, initialLocale = "en" }) {
	const [, bump] = useState(0);

	useEffect(() => {
		const lng = readStoredLocale();

		const onChanged = (lang) => {
			document.documentElement.lang = lang === "es" ? "es" : "en";
			setLocaleCookie(lang);
			try {
				localStorage.setItem("locale", lang);
			} catch (_) {}
			bump((n) => n + 1);
		};

		void i18n.changeLanguage(lng).then(() => {
			document.documentElement.lang = lng === "es" ? "es" : "en";
		});

		i18n.on("languageChanged", onChanged);

		return () => {
			i18n.off("languageChanged", onChanged);
		};
	}, [initialLocale]);

	return (
		<I18nextProvider i18n={i18n}>{children}</I18nextProvider>
	);
}
