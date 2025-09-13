Source: app/api/generate-ai-code-stream/route.ts (exact-match search path)
Tool: AI SDK `streamText` (providers: OpenAI/Anthropic/Gemini/Groq)

Prefix (from `formatSearchResultsForAI(...)`) followed by:

SURGICAL EDIT INSTRUCTIONS:
You have been given the EXACT location of the code to edit.
- File: ${target.filePath}
- Line: ${target.lineNumber}
- Reason: ${target.reason}

Make ONLY the change requested by the user. Do not modify any other code.
User request: "${prompt}"

