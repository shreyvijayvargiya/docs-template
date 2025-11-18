"use client";

import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const messageTypes = {
	info: {
		icon: Info,
		bgColor: "bg-blue-50 dark:bg-blue-950/20",
		borderColor: "border-blue-200 dark:border-blue-800",
		textColor: "text-blue-900 dark:text-blue-100",
		iconColor: "text-blue-600 dark:text-blue-400",
	},
	success: {
		icon: CheckCircle,
		bgColor: "bg-green-50 dark:bg-green-950/20",
		borderColor: "border-green-200 dark:border-green-800",
		textColor: "text-green-900 dark:text-green-100",
		iconColor: "text-green-600 dark:text-green-400",
	},
	warning: {
		icon: AlertTriangle,
		bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
		borderColor: "border-yellow-200 dark:border-yellow-800",
		textColor: "text-yellow-900 dark:text-yellow-100",
		iconColor: "text-yellow-600 dark:text-yellow-400",
	},
	danger: {
		icon: XCircle,
		bgColor: "bg-red-50 dark:bg-red-950/20",
		borderColor: "border-red-200 dark:border-red-800",
		textColor: "text-red-900 dark:text-red-100",
		iconColor: "text-red-600 dark:text-red-400",
	},
};

export default function MDXMessage({ type = "info", children, ...props }) {
	const config = messageTypes[type] || messageTypes.info;
	const Icon = config.icon;

	return (
		<div
			className={`my-4 p-4 rounded-xl border-l-4 ${config.bgColor} ${config.borderColor} ${config.textColor}`}
			{...props}
		>
			<div className="flex items-start gap-3">
				<Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
				<div className="flex-1 text-sm">{children}</div>
			</div>
		</div>
	);
}

