"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function PageFeedback() {
	const [feedback, setFeedback] = useState(null);
	const [submitted, setSubmitted] = useState(false);

	const handleFeedback = (value) => {
		setFeedback(value);
		setSubmitted(true);
		// Here you could send feedback to an API
		setTimeout(() => {
			setSubmitted(false);
			setFeedback(null);
		}, 3000);
	};

	return (
		<div className="my-8 pt-6 flex items-center gap-2 ">
			<p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
				Is this page helpful?
			</p>
			<button
				onClick={() => handleFeedback("yes")}
				disabled={submitted}
				className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-colors ${
					feedback === "yes"
						? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
						: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
				} disabled:opacity-50`}
			>
				<ThumbsUp className="w-3.5 h-3.5" />
				<span>Yes</span>
			</button>
			<button
				onClick={() => handleFeedback("no")}
				disabled={submitted}
				className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-colors ${
					feedback === "no"
						? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
						: "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
				} disabled:opacity-50`}
			>
				<ThumbsDown className="w-3.5 h-3.5" />
				<span>No</span>
			</button>
			{submitted && (
				<span className="text-xs text-zinc-600 dark:text-zinc-400 ml-2">
					Thank you for your feedback!
				</span>
			)}
		</div>
	);
}
