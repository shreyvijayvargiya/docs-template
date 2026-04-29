import Content from "../speech-to-text-rest-api.mdx";
import MDXContent from "../../../../components/MDXContent";
import { navigationData } from "../../../../lib/navigation-data";
import { generateMetadata as generateSEOMetadata } from "../../../../lib/seo-utils";

export const metadata = generateSEOMetadata(
	"/api-reference/endpoints/speech-to-text-rest-api",
	{
		title:
			"Speech-to-Text REST API - Instant Audio Transcription | Sarvam AI Developer Documentation",
		description:
			"Process short audio files synchronously with Sarvam AI's REST API. Instant transcription results with simple integration and multiple audio format support.",
		image:
			"https://res.cloudinary.com/dvcb20x9a/image/upload/v1743510800/image_3_rpnrug.png",
		type: "article",
		keywords:
			"Sarvam AI, speech to text, REST API, transcription, translation, Saaras v3, developer documentation",
		twitterSite: "@SarvamAI",
	}
);

export default function SpeechToTextRestApiPage() {
	return (
		<MDXContent
			currentRoute="/api-reference/endpoints/speech-to-text-rest-api"
			section={navigationData["api-reference"]}
			baseRoute="/api-reference"
		>
			<Content />
		</MDXContent>
	);
}
