// AI service client using Google Generative AI (Gemini API)
// Uses the API key from environment variables

const API_KEY = import.meta.env.VITE_AI_API_KEY;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export async function sendMessage(message) {
  if (!message || !message.trim()) {
    return "Please enter a message.";
  }

  // If backend URL is configured, use backend proxy
  if (BACKEND_URL) {
    return sendViaBackend(message);
  }

  // Otherwise try direct API call
  return sendDirectToGemini(message);
}

async function sendDirectToGemini(message) {
  if (!API_KEY) {
    console.error("AI API key not configured in .env");
    return "AI service is not configured. Please add VITE_AI_API_KEY to your .env file.";
  }

  try {
    console.log(
      "Calling Gemini API with key:",
      API_KEY.substring(0, 10) + "...",
    );

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMsg = errorData.error?.message || `HTTP ${response.status}`;
      throw new Error(`Gemini API Error: ${errorMsg}`);
    }

    const data = await response.json();

    // Extract text from Gemini API response
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    console.error("Unexpected Gemini response format:", data);
    return "Received empty response from AI service.";
  } catch (err) {
    console.error("Direct Gemini API failed:", err.message);

    // If it's a CORS or network error, suggest backend setup
    if (
      err.message.includes("Failed to fetch") ||
      err.message.includes("CORS")
    ) {
      return (
        "Network error: You may need to set up a backend proxy. " +
        "Set VITE_BACKEND_URL in your .env file or configure CORS on your server."
      );
    }

    return `AI Error: ${err.message}`;
  }
}

async function sendViaBackend(message) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/ai-chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    const data = await response.json();
    return data.reply || "No response from backend.";
  } catch (err) {
    console.error("Backend request failed:", err.message);
    return `Backend Error: ${err.message}`;
  }
}
