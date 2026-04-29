"use client";

import { Github, Linkedin } from "lucide-react";
import { socialUrls } from "../lib/site-social";

/** X logo (formerly Twitter) */
function IconX(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden
			className={props.className}
		>
			<path d="M13.938 10.668L20.694 3h-1.596l-5.867 6.734L9.097 3H3.698l8.069 11.694L3.698 21h1.596l6.246-7.173L14.954 21H20.35l-6.413-10.332zm-2.104 2.394l-.839-1.205L6.065 4.56h3.074l5.096 7.297.839 1.205 4.66 6.678h-3.074l-3.63-5.225z" />
		</svg>
	);
}

const iconBtn =
	"p-2 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition-colors";

/**
 * X, GitHub, LinkedIn — icon-only row. Order: X → GitHub → LinkedIn.
 */
export default function SocialIconLinks({ className = "" }) {
	return (
		<div
			className={`flex flex-row items-center justify-center gap-1 ${className}`}
		>
			<a
				href={socialUrls.x}
				target="_blank"
				rel="noopener noreferrer"
				className={iconBtn}
				aria-label="X"
			>
				<IconX className="h-4 w-4" />
			</a>
			<a
				href={socialUrls.github}
				target="_blank"
				rel="noopener noreferrer"
				className={iconBtn}
				aria-label="GitHub"
			>
				<Github className="h-4 w-4" strokeWidth={2} />
			</a>
			<a
				href={socialUrls.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				className={iconBtn}
				aria-label="LinkedIn"
			>
				<Linkedin className="h-4 w-4" strokeWidth={2} />
			</a>
		</div>
	);
}
