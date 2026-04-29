/** Code tab payloads for Speech-to-Text REST API docs (Python / JavaScript / cURL). */

export const saarasV3Tabs = [
	{
		label: "Python",
		language: "python",
		code: `from sarvamai import SarvamAI

client = SarvamAI(
    api_subscription_key="YOUR_SARVAM_API_KEY",
)

# Transcribe mode (default)
response = client.speech_to_text.transcribe(
    file=open("audio.wav", "rb"),
    model="saaras:v3",
    mode="transcribe"  # or "translate", "verbatim", "translit", "codemix"
)

print(response)`,
	},
	{
		label: "JavaScript",
		language: "javascript",
		code: `import { SarvamAIClient } from "sarvamai";
import fs from "fs";

const client = new SarvamAIClient({
  apiSubscriptionKey: "YOUR_SARVAM_API_KEY",
});

const audioFile = fs.createReadStream("recording.wav");

const response = await client.speechToText.transcribe({
  file: audioFile,
  model: "saaras:v3",
  mode: "transcribe", // or "translate", "verbatim", "translit", "codemix"
});

console.log(response);`,
	},
	{
		label: "cURL",
		language: "bash",
		code: `curl -X POST https://api.sarvam.ai/speech-to-text \\
  -H "api-subscription-key: YOUR_SARVAM_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F model="saaras:v3" \\
  -F mode="transcribe" \\
  -F file=@"file.wav;type=audio/wav"`,
	},
];

export const saarikaV25Tabs = [
	{
		label: "Python",
		language: "python",
		code: `from sarvamai import SarvamAI

client = SarvamAI(
    api_subscription_key="YOUR_SARVAM_API_KEY",
)

response = client.speech_to_text.transcribe(
    file=open("audio.wav", "rb"),
    model="saaras:v3",
    mode="transcribe",
    language_code="hi-IN"
)

print(response)`,
	},
	{
		label: "JavaScript",
		language: "javascript",
		code: `import { SarvamAIClient } from "sarvamai";
import fs from "fs";

const client = new SarvamAIClient({
  apiSubscriptionKey: "YOUR_SARVAM_API_KEY",
});

const audioFile = fs.createReadStream("audio.wav");

const response = await client.speechToText.transcribe({
  file: audioFile,
  model: "saaras:v3",
  mode: "transcribe",
  languageCode: "hi-IN",
});

console.log(response);`,
	},
	{
		label: "cURL",
		language: "bash",
		code: `curl -X POST https://api.sarvam.ai/speech-to-text \\
  -H "api-subscription-key: YOUR_SARVAM_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F model="saaras:v3" \\
  -F mode="transcribe" \\
  -F language_code="hi-IN" \\
  -F file=@"file.wav;type=audio/wav"`,
	},
];

export const saarasTranslateTabs = [
	{
		label: "Python",
		language: "python",
		code: `from sarvamai import SarvamAI

client = SarvamAI(
    api_subscription_key="YOUR_SARVAM_API_KEY",
)

response = client.speech_to_text.translate(
    file=open("audio.wav", "rb"),
    model="saaras:v3",
    mode="translate"
)

print(response)`,
	},
	{
		label: "JavaScript",
		language: "javascript",
		code: `import { SarvamAIClient } from "sarvamai";
import fs from "fs";

const client = new SarvamAIClient({
  apiSubscriptionKey: "YOUR_SARVAM_API_KEY",
});

const audioFile = fs.createReadStream("audio.wav");

const response = await client.speechToText.translate({
  file: audioFile,
  model: "saaras:v3",
  mode: "translate",
});

console.log(response);`,
	},
	{
		label: "cURL",
		language: "bash",
		code: `curl -X POST https://api.sarvam.ai/speech-to-text-translate \\
  -H "api-subscription-key: YOUR_SARVAM_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F file=@audio.wav \\
  -F model="saaras:v3" \\
  -F mode="translate"`,
	},
];

export const errorHandlingCode = `from sarvamai import SarvamAI
from sarvamai.core.api_error import ApiError

client = SarvamAI(api_subscription_key="YOUR_SARVAM_API_KEY")

try:
    response = client.speech_to_text.transcribe(
        file=open("audio.wav", "rb"),
        model="saaras:v3",
        mode="transcribe"
    )
    print(response.transcript)
except ApiError as e:
    if e.status_code == 400:
        print(f"Bad request: {e.body}")
    elif e.status_code == 403:
        print("Invalid API key. Check your credentials.")
    elif e.status_code == 429:
        print("Rate limit exceeded. Wait and retry.")
    elif e.status_code == 503:
        print("Service overloaded. Retry with backoff.")
    else:
        print(f"Error {e.status_code}: {e.body}")`;
