"use client";

import React from "react";
import {
	Check,
	Code,
	Palette,
	Zap,
	BookOpen,
	Sparkles,
	ArrowRight,
} from "lucide-react";

const Home = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
			<div className="max-w-5xl mx-auto px-8 py-16">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-700 dark:text-zinc-300 mb-6">
						<Sparkles className="w-4 h-4" />
						<span>Modern Documentation Template</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
						Next.js Documentation Template
					</h1>
					<p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
						Build beautiful, modern documentation sites with Next.js, React, and
						Tailwind CSS. Fully customizable and production-ready.
					</p>
					<a
						href="https://shreyvijayvargiya.gumroad.com/l/frontend-documentation-nextjs-template"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-xl"
					>
						<span>Buy on Gumroad</span>
						<ArrowRight className="w-5 h-5" />
					</a>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-6 mb-16">
					<div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
						<div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
							<Code className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Built with Next.js</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							Leverage the power of Next.js 14+ with App Router, Server
							Components, and optimized performance.
						</p>
					</div>
					<div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
						<div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
							<Palette className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							Beautiful, responsive design with Tailwind CSS. Dark mode support
							included out of the box.
						</p>
					</div>
					<div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
						<div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
							<Zap className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
						</div>
						<h3 className="text-xl font-semibold mb-2">MDX Support</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							Write documentation in MDX format. Mix Markdown with React
							components seamlessly.
						</p>
					</div>
				</div>

				{/* About Section */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-6">About This Template</h2>
					<div className="prose prose-zinc dark:prose-invert max-w-none">
						<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
							This documentation template is designed for developers and teams
							who need a professional, modern documentation site without the
							hassle of building everything from scratch.
						</p>
						<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
							It includes everything you need to get started: a responsive
							sidebar navigation, table of contents, search functionality, dark
							mode, and a clean, readable design that works beautifully on all
							devices.
						</p>
						<p className="text-lg text-zinc-600 dark:text-zinc-400">
							The template is fully customizable, well-documented, and follows
							modern React and Next.js best practices. Perfect for API
							documentation, product docs, guides, or any content-heavy site.
						</p>
					</div>
				</div>

				{/* How to Use Section */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-6">How to Use This Template</h2>
					<div className="space-y-4">
						<div className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
							<div className="flex-shrink-0 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-semibold">
								1
							</div>
							<div>
								<h3 className="font-semibold mb-1">Install Dependencies</h3>
								<p className="text-zinc-600 dark:text-zinc-400">
									Run{" "}
									<code className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm">
										npm install
									</code>{" "}
									to install all required dependencies.
								</p>
							</div>
						</div>
						<div className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
							<div className="flex-shrink-0 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-semibold">
								2
							</div>
							<div>
								<h3 className="font-semibold mb-1">Customize Content</h3>
								<p className="text-zinc-600 dark:text-zinc-400">
									Edit the MDX files in the{" "}
									<code className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm">
										app/
									</code>{" "}
									directory to add your own content. Update navigation in{" "}
									<code className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm">
										lib/navigation-data.js
									</code>
									.
								</p>
							</div>
						</div>
						<div className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
							<div className="flex-shrink-0 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-semibold">
								3
							</div>
							<div>
								<h3 className="font-semibold mb-1">Update Branding</h3>
								<p className="text-zinc-600 dark:text-zinc-400">
									Modify the logo, colors, and branding in the components.
									Update metadata in{" "}
									<code className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-sm">
										app/layout.jsx
									</code>
									.
								</p>
							</div>
						</div>
						<div className="flex gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
							<div className="flex-shrink-0 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-semibold">
								4
							</div>
							<div>
								<h3 className="font-semibold mb-1">Deploy</h3>
								<p className="text-zinc-600 dark:text-zinc-400">
									Deploy to Vercel, Netlify, or any platform that supports
									Next.js. The template is optimized for production.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Key Features List */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-6">Key Features</h2>
					<div className="grid md:grid-cols-2 gap-4">
						{[
							"Responsive sidebar navigation",
							"Table of contents (TOC)",
							"Dark mode support",
							"MDX content support",
							"Search functionality",
							"Copy code blocks",
							"Page feedback system",
							"AI chatbot integration",
							"SEO optimized",
							"Fast page loads",
							"Accessible design",
							"Mobile-friendly",
						].map((feature, index) => (
							<div key={index} className="flex items-center gap-3">
								<Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
								<span className="text-zinc-700 dark:text-zinc-300">
									{feature}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className="text-center p-12 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
					<BookOpen className="w-12 h-12 mx-auto mb-4 text-zinc-900 dark:text-zinc-100" />
					<h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
					<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
						Purchase the template and start building your documentation site
						today. Includes full source code and lifetime updates.
					</p>
					<a
						href="https://shreyvijayvargiya.gumroad.com/l/frontend-documentation-nextjs-template"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-10 py-5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-semibold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-xl"
					>
						<span>Buy Template on Gumroad</span>
						<ArrowRight className="w-5 h-5" />
					</a>
				</div>
			</div>
		</div>
	);
};
export default Home;
