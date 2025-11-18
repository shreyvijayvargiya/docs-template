"use client";

import React, { useState, useRef, useEffect } from "react";
import {
	X,
	Trash2,
	Maximize2,
	Minimize2,
	Sparkles,
	ArrowUp,
} from "lucide-react";
import { useTheme } from "../lib/theme-provider";

const AIChatbot = () => {
	const { theme } = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [isSearching, setIsSearching] = useState(false);
	const [isGenerating, setIsGenerating] = useState(false);
	const messagesEndRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		const handleOpenChatbot = (event) => {
			setIsOpen(true);
			// If code context is provided, pre-fill the input
			if (event.detail?.code) {
				const codeContext = `Here's the code:\n\`\`\`${
					event.detail.language || ""
				}\n${event.detail.code}\n\`\`\`\n\n`;
				setInputValue(codeContext);
				// Focus input after a short delay
				setTimeout(() => {
					inputRef.current?.focus();
				}, 100);
			}
		};

		window.addEventListener("openAIChatbot", handleOpenChatbot);
		return () => {
			window.removeEventListener("openAIChatbot", handleOpenChatbot);
		};
	}, []);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSend = () => {
		if (!inputValue.trim() || isGenerating) return;

		const userMessage = {
			id: Date.now(),
			text: inputValue,
			sender: "user",
		};

		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");
		setIsSearching(true);
		setIsGenerating(true);

		// Simulate AI response
		setTimeout(() => {
			setIsSearching(false);
			setTimeout(() => {
				const aiMessage = {
					id: Date.now() + 1,
					text: "This is a sample AI response. In a real implementation, this would connect to an AI service.",
					sender: "ai",
				};
				setMessages((prev) => [...prev, aiMessage]);
				setIsGenerating(false);
			}, 1500);
		}, 1000);
	};

	const handleDelete = () => {
		setMessages([]);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	if (!isOpen) {
		return (
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-4 right-4 bg-zinc-900 dark:bg-zinc-800 text-white p-3 rounded-xl shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors z-50"
			>
				<Sparkles className="w-5 h-5" />
			</button>
		);
	}

	return (
		<div
			className={`fixed right-0 top-0 h-screen bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-lg flex flex-col transition-all duration-300 z-50 ${
				isExpanded ? "w-[600px]" : "w-[400px]"
			}`}
		>
			{/* Header */}
			<div className="flex items-center justify-between p-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
				<div className="flex items-center gap-1.5">
					<Sparkles className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
					<h2 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
						Assistant
					</h2>
				</div>
				<div className="flex items-center gap-1.5">
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
						title={isExpanded ? "Minimize width" : "Expand width"}
					>
						{isExpanded ? (
							<Minimize2 className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
						) : (
							<Maximize2 className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
						)}
					</button>
					<button
						onClick={handleDelete}
						className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
						title="Delete conversation"
					>
						<Trash2 className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
					</button>
					<button
						onClick={handleClose}
						className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
						title="Close assistant"
					>
						<X className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
					</button>
				</div>
			</div>

			{/* Messages Area */}
			<div className="flex-1 overflow-y-auto p-3 space-y-3 bg-white dark:bg-zinc-950">
				{messages.length === 0 && !isSearching && (
					<div className="text-center text-zinc-500 dark:text-zinc-400 mt-6">
						<p className="text-xs">Start a conversation by asking a question</p>
					</div>
				)}

				{messages.map((message) => (
					<div
						key={message.id}
						className={`flex ${
							message.sender === "user" ? "justify-end" : "justify-start"
						}`}
					>
						<div
							className={`max-w-[80%] rounded-xl px-3 py-1.5 ${
								message.sender === "user"
									? "bg-zinc-900 dark:bg-zinc-800 text-white"
									: "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
							}`}
						>
							<p className="text-xs whitespace-pre-wrap">{message.text}</p>
						</div>
					</div>
				))}

				{isSearching && (
					<div className="flex justify-start">
						<div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl px-3 py-1.5">
							<p className="text-xs text-zinc-600 dark:text-zinc-400">
								Searching for overview introduction getting started
							</p>
						</div>
					</div>
				)}

				{isGenerating && !isSearching && (
					<div className="flex justify-start">
						<div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl px-3 py-1.5">
							<p className="text-xs text-zinc-600 dark:text-zinc-400">
								Generating..
							</p>
						</div>
					</div>
				)}

				<div ref={messagesEndRef} />
			</div>

			{/* Input Area */}
			<div className="border-t border-zinc-200 dark:border-zinc-800 p-3 bg-white dark:bg-zinc-950">
				<div className="flex items-end gap-1.5">
					<div className="flex-1 relative">
						<textarea
							ref={inputRef}
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyPress={handleKeyPress}
							placeholder="Ask a question..."
							className="w-full px-3 py-2 pr-10 border border-zinc-300 dark:border-zinc-700 rounded-xl resize-none bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent text-xs"
							rows={1}
							style={{
								minHeight: "36px",
								maxHeight: "100px",
							}}
							onInput={(e) => {
								e.target.style.height = "auto";
								e.target.style.height = `${e.target.scrollHeight}px`;
							}}
						/>
					</div>
					<button
						onClick={handleSend}
						disabled={!inputValue.trim() || isGenerating}
						className="p-1.5 bg-zinc-900 dark:bg-zinc-800 text-white rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						title="Send"
					>
						<ArrowUp className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default AIChatbot;
