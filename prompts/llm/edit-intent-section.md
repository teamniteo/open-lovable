Source: lib/context-selector.ts (buildSystemPrompt → Edit Intent section)
Tool: AI SDK (provider-agnostic; used by `buildSystemPrompt`)

Template:

## Edit Intent
Type: ${editIntent.type}
Description: ${editIntent.description}
Confidence: ${(editIntent.confidence * 100).toFixed(0)}%

User Request: "${userPrompt}"

