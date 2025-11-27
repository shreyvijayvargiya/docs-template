# Documentation Template

A modern, feature-rich documentation template built with Next.js, React, Tailwind CSS, and MDX. Perfect for creating beautiful documentation sites with minimal setup.

## ✨ Features

- 📝 **MDX Support** - Write content in Markdown with React components
- 🎨 **Modern UI** - Beautiful, responsive design with dark mode support
- 🔍 **Table of Contents** - Auto-generated from page headings
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🌙 **Dark Mode** - Built-in theme switching
- 🧭 **Smart Navigation** - Sidebar navigation with nested sections
- 🔗 **Prev/Next Navigation** - Easy page-to-page navigation
- 📋 **Code Highlighting** - Syntax highlighting for code blocks
- 🤖 **AI Chatbot** - Integrated AI assistant (optional)
- ⚡ **Fast Performance** - Optimized with Next.js 15

---

## 🚀 How to Get Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager

You can check your Node.js version by running:

```bash
node --version
```

### Installation

1. **Clone or download this template**

   ```bash
   # If using git
   git clone <repository-url>
   cd Docs-Template

   # Or extract the downloaded zip file and navigate to the folder
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Start the development server**

   ```bash
   # Using npm
   npm run dev

   # Or using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your documentation site.

That's it! Your documentation site is now running locally. 🎉

---

## 📖 How to Use

### Development Mode

Run the development server to see your changes in real-time:

```bash
npm run dev
```

The site will automatically reload when you make changes to files. This is perfect for writing and editing your documentation.

### Building for Production

When you're ready to deploy your documentation:

```bash
npm run build
```

This creates an optimized production build in the `.next` directory. The template is configured for static export, making it easy to deploy to any static hosting service.

### Starting Production Server

To preview the production build locally:

```bash
npm run start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## ✏️ How to Quickly Create Your Own Docs

This template makes it easy to customize and add your own content. Here's how to get started:

### Understanding the Structure

The template uses a simple structure:

```
app/
  ├── docs/              # Main documentation pages
  ├── api-reference/     # API documentation
  ├── guides/            # Tutorial guides
  ├── changelog/         # Version history
  └── support/           # Support pages
```

Each section contains:

- **MDX files** (`.mdx`) - Your content written in Markdown
- **Page files** (`page.jsx`) - React components that render the MDX content

### Step 1: Update Navigation

Edit `lib/navigation-data.js` to customize your sidebar navigation:

```javascript
export const navigationData = {
	docs: [
		{
			heading: "Getting Started",
			items: [
				{ name: "Introduction", hasDropdown: false },
				{ name: "Installation", hasDropdown: false },
			],
		},
		{
			heading: "Features",
			items: [
				{ name: "Overview", hasDropdown: false },
				{
					name: "Advanced Features",
					hasDropdown: true,
					key: "advancedFeatures",
					subItems: ["Feature One", "Feature Two"],
				},
			],
		},
	],
	// ... other sections
};
```

**Navigation Structure:**

- `heading` - Section title in sidebar
- `name` - Page name (will be converted to URL slug)
- `hasDropdown: false` - Regular page link
- `hasDropdown: true` - Parent with sub-items
- `subItems` - Array of nested page names
- `badge` - Optional badge text (e.g., "Beta", "New")
- `hasArrow: true` - Shows arrow indicator

### Step 2: Create Your Content Files

1. **Create MDX files** in the appropriate `app/` subdirectory:

   ```
   app/docs/your-section/your-page.mdx
   ```

2. **Write your content** in Markdown:

   ````markdown
   # Your Page Title

   Welcome to your documentation page!

   ## Section One

   Your content here...

   ### Subsection

   More content...

   ```javascript
   // Code examples work too!
   const example = "Hello World";
   ```
   ````

   ```

   ```

3. **MDX Features Available:**
   - Standard Markdown syntax
   - Code blocks with syntax highlighting
   - Custom components (see `mdx-components.jsx`)
   - React components inline

### Step 3: Create Page Components

For each MDX file, create a corresponding `page.jsx`:

```javascript
import Content from "../your-page.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";

export default function YourPage() {
	return (
		<MDXContent
			currentRoute="/docs/your-section/your-page"
			section={navigationData.docs}
			baseRoute="/docs"
		>
			<Content />
		</MDXContent>
	);
}
```

**Important:** The `currentRoute` must match the URL path you want.

### Step 4: Update Route Mapping

Add your new route to `lib/route-mapping.js`:

```javascript
export const routeMapping = {
	// ... existing routes
	"/docs/your-section/your-page": "app/docs/your-section/your-page.mdx",
};
```

**Route Format:**

- Route path: `/docs/section-name/page-name`
- File path: `app/docs/section-name/page-name.mdx`

### Step 5: Organize Your Files

Create the folder structure matching your routes:

```
app/
  docs/
    your-section/
      your-page.mdx
      your-page/
        page.jsx
```

### Quick Example: Adding a New Page

Let's say you want to add a "Quick Start" page under "Getting Started":

1. **Update navigation** in `lib/navigation-data.js`:

   ```javascript
   {
     heading: "Getting Started",
     items: [
       { name: "Introduction", hasDropdown: false },
       { name: "Quick Start", hasDropdown: false }, // Add this
     ],
   }
   ```

2. **Create the MDX file**: `app/docs/getting-started/quick-start.mdx`

   ```markdown
   # Quick Start Guide

   Get up and running in minutes!
   ```

3. **Create the page**: `app/docs/getting-started/quick-start/page.jsx`

   ```javascript
   import Content from "../quick-start.mdx";
   import MDXContent from "../../../../components/MDXContent";
   import { navigationData } from "../../../../lib/navigation-data";

   export default function QuickStartPage() {
   	return (
   		<MDXContent
   			currentRoute="/docs/getting-started/quick-start"
   			section={navigationData.docs}
   			baseRoute="/docs"
   		>
   			<Content />
   		</MDXContent>
   	);
   }
   ```

4. **Add route mapping** in `lib/route-mapping.js`:

   ```javascript
   "/docs/getting-started/quick-start": "app/docs/getting-started/quick-start.mdx",
   ```

5. **Done!** Your new page is now accessible at `/docs/getting-started/quick-start`

### Editing Existing Content

To edit existing documentation:

1. Find the MDX file in the `app/` directory
2. Edit the Markdown content
3. Save the file
4. The page will automatically reload in your browser

### Tips for Content Creation

- **Use clear headings** - They automatically appear in the table of contents
- **Add code examples** - Use triple backticks with language identifiers
- **Keep it organized** - Follow the existing folder structure
- **Test your routes** - Make sure route mappings match your file paths
- **Use consistent naming** - Use kebab-case for file and folder names

---

## 🎨 Customization

### Changing Colors and Styling

The template uses Tailwind CSS. Customize colors in `tailwind.config.js`:

```javascript
module.exports = {
	theme: {
		extend: {
			colors: {
				// Your custom colors
			},
		},
	},
};
```

### Updating Metadata

Edit `app/layout.jsx` to change site title and description:

```javascript
export const metadata = {
	title: "Your Documentation",
	description: "Your documentation description",
};
```

### Custom Components

Add custom MDX components in `mdx-components.jsx` to use in your content:

```javascript
export function CustomComponent({ children }) {
	return <div className="custom">{children}</div>;
}
```

Then use in MDX:

```markdown
<CustomComponent>Your content</CustomComponent>
```

---

## 📁 Project Structure

```
Docs-Template/
├── app/                    # Next.js app directory
│   ├── docs/              # Documentation pages
│   ├── api-reference/     # API docs
│   ├── guides/            # Tutorial guides
│   ├── changelog/         # Version history
│   ├── support/           # Support pages
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Home page
├── components/            # React components
│   ├── MDXContent.jsx     # Main content wrapper
│   ├── TableOfContents.jsx
│   └── ...
├── lib/                   # Utility functions
│   ├── navigation-data.js # Sidebar navigation
│   ├── route-mapping.js   # Route to file mapping
│   └── ...
├── modules/               # Feature modules
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── AIChatbot.jsx
└── package.json          # Dependencies
```

---

## 🚢 Deployment

This template is configured for static export, making deployment easy:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy!

### Other Static Hosts

Any static hosting service works:

- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Any CDN

---

## 📝 License

This template is available for use in your projects. Customize it to fit your needs!

---

## 💡 Need Help?

- Check the existing examples in the `app/` directory
- Review the component files in `components/`
- Examine `lib/navigation-data.js` for navigation patterns

Happy documenting! 🎉
