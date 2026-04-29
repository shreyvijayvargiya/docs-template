import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../lib/theme-provider";
import { SidebarProvider } from "../lib/sidebar-provider";
import { getThemeFromCookie } from "../lib/theme-utils-server";
import { I18nProvider } from "../lib/i18n-provider";
import AIChatbot from "../modules/AIChatbot";
import Sidebar from "../modules/Sidebar";
import Navbar from "../modules/Navbar";
import MainShell from "../components/MainShell";
import DocsFooter from "../components/DocsFooter";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";

export const metadata = {
	title: {
		default: "Docs Template",
		template: "%s | Docs Template",
	},
	description: "Modern Nextjs React Tailwind Documentation Template",
	metadataBase: new URL(siteUrl),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: "Docs Template",
		title: "Docs Template",
		description: "Modern Nextjs React Tailwind Documentation Template",
	},
	twitter: {
		card: "summary_large_image",
		title: "Docs Template",
		description: "Modern Nextjs React Tailwind Documentation Template",
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

export default async function RootLayout({ children }) {
	const theme = (await getThemeFromCookie()) || "light";

	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={theme === "dark" ? "dark" : ""}
		>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									var theme = document.cookie
										.split('; ')
										.find(row => row.startsWith('theme='))
										?.split('=')[1] || '${theme}';
									if (theme === 'dark') {
										document.documentElement.classList.add('dark');
									} else {
										document.documentElement.classList.remove('dark');
									}
								} catch (e) {}
							})();
						`,
					}}
				/>
			</head>
			<body
				suppressHydrationWarning
				className={`${inter.className} flex min-h-screen flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
			>
				<I18nProvider initialLocale="en">
					<ThemeProvider initialTheme={theme}>
						<SidebarProvider initialDesktopExpanded={true}>
							<Navbar />
							<Sidebar />
							<AIChatbot />
							<MainShell>{children}</MainShell>
							<DocsFooter />
						</SidebarProvider>
					</ThemeProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
