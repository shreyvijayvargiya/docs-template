# SEO Optimization Guide

This template now includes comprehensive SEO optimization. Here's how to add SEO metadata to your pages.

## Current SEO Implementation

✅ **Root Layout** - Enhanced with Open Graph, Twitter Cards, and robots meta tags
✅ **SEO Utility Functions** - Reusable functions in `lib/seo-utils.js`
✅ **Structured Data Component** - JSON-LD schema markup component
✅ **Example Pages** - `app/docs/bootup/introduction/page.jsx` and `app/docs/bootup/migrate-to-docs/page.jsx`

## How to Add SEO to a Page

### Step 1: Import the SEO utility

```javascript
import { generateMetadata as generateSEOMetadata } from "../../../../lib/seo-utils";
```

### Step 2: Export metadata

Add this before your component:

```javascript
export const metadata = generateSEOMetadata("/your/route/path", {
	title: "Your Page Title",
	description:
		"A detailed description of your page content (150-160 characters recommended)",
	keywords: "keyword1, keyword2, keyword3", // Optional
	image: "https://your-site.com/custom-og-image.png", // Optional
	type: "article", // Optional: "website" (default) or "article"
});
```

### Complete Example

```javascript
import Content from "../your-page.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";
import { generateMetadata as generateSEOMetadata } from "../../../../lib/seo-utils";

export const metadata = generateSEOMetadata("/docs/features/products", {
	title: "Products",
	description:
		"Learn about our product management features. Create, update, and manage products with our comprehensive API and dashboard tools.",
	keywords: "products, product management, API, documentation",
});

export default function ProductsPage() {
	return (
		<MDXContent
			currentRoute="/docs/features/products"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
```

## SEO Features Included

### 1. Meta Tags

- **Title** - Page-specific titles with site name template
- **Description** - Meta descriptions for search results
- **Keywords** - SEO keywords (optional but useful)
- **Canonical URL** - Prevents duplicate content issues

### 2. Open Graph Tags

- Title, description, and image for social sharing
- Site name and locale
- URL for proper linking

### 3. Twitter Card Tags

- Large image card format
- Title and description
- Optimized for Twitter sharing

### 4. Robots Meta Tags

- Index/follow directives
- Google Bot specific settings
- Image and video preview settings

### 5. Structured Data (JSON-LD)

- Schema.org markup
- Article/WebPage types
- Publisher information

## Environment Variables

Add to your `.env.local` or deployment environment:

```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

This is used for:

- Canonical URLs
- Open Graph images
- Structured data URLs

## Best Practices

### Title Tags

- Keep under 60 characters
- Include relevant keywords
- Make it descriptive and compelling

### Meta Descriptions

- Keep between 150-160 characters
- Include a call-to-action when appropriate
- Use natural language with keywords

### Keywords

- Use 5-10 relevant keywords
- Include variations and synonyms
- Don't keyword stuff

### Images

- Use 1200x630px for Open Graph images
- Optimize file size (< 1MB recommended)
- Use descriptive alt text

## Quick Template for New Pages

Copy this template when creating new pages:

```javascript
import Content from "../page-name.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";
import { generateMetadata as generateSEOMetadata } from "../../../../lib/seo-utils";

export const metadata = generateSEOMetadata("/section/subsection/page-name", {
	title: "Page Title",
	description: "Brief description of the page content (150-160 chars)",
	keywords: "relevant, keywords, here",
});

export default function PageNamePage() {
	return (
		<MDXContent
			currentRoute="/section/subsection/page-name"
			section={navigationData.section}
			baseRoute="/section"
		>
			<Content />
		</MDXContent>
	);
}
```

## Adding Structured Data (Optional)

If you want to add structured data to a page:

```javascript
import StructuredData from "../../../../components/StructuredData";

export default function YourPage() {
	return (
		<>
			<StructuredData
				route="/your/route"
				title="Your Page Title"
				description="Your page description"
				type="Article" // or "WebPage"
			/>
			<MDXContent>
				<Content />
			</MDXContent>
		</>
	);
}
```

## Testing SEO

### Tools to Test Your SEO:

1. **Google Rich Results Test** - https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger** - https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator** - https://cards-dev.twitter.com/validator
4. **LinkedIn Post Inspector** - https://www.linkedin.com/post-inspector/

### Checklist:

- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Open Graph tags are working
- [ ] Twitter Cards are working
- [ ] Canonical URLs are correct
- [ ] Structured data validates
- [ ] Images are optimized
- [ ] Site URL environment variable is set

## Next Steps

1. **Add metadata to all existing pages** - Use the template above
2. **Set NEXT_PUBLIC_SITE_URL** - Update with your actual domain
3. **Create OG images** - Add custom Open Graph images for better social sharing
4. **Test all pages** - Use the testing tools above
5. **Monitor in Search Console** - Set up Google Search Console for your site

## Notes

- Metadata is generated at build time (static export compatible)
- All SEO tags are server-rendered
- No client-side JavaScript required for SEO
- Works with Next.js static export
