/** Public URLs for social icons (override via .env.local in production) */
export const socialUrls = {
	x: process.env.NEXT_PUBLIC_SOCIAL_X_URL || "https://x.com",
	github: process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL || "https://github.com",
	linkedin:
		process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL ||
		"https://www.linkedin.com",
};
