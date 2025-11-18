const createMDX = require("@next/mdx");

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	pageExtensions: ["js", "jsx", "md", "mdx"],
};

module.exports = withMDX(nextConfig);
