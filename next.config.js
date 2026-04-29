const createMDX = require("@next/mdx");
const remarkGfm = require("remark-gfm").default;

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	pageExtensions: ["js", "jsx", "md", "mdx"],
};

module.exports = withMDX(nextConfig);
