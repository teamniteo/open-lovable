Source: packages/create-open-lovable/lib/prompts.js
Tool: Inquirer

Top-level prompts (getPrompts):
- type: input; name: name; message: "Project name:"; default: "my-open-lovable"; validate: non-empty, alnum-dash-underscore
- type: list; name: sandbox; message: "Choose your sandbox provider:"; choices: [E2B, Vercel]; default: e2b
- type: confirm; name: configureEnv; message: "Would you like to configure API keys now?"; default: true

Environment prompts (getEnvPrompts):
- Always: type: input; name: firecrawlApiKey; message: "Firecrawl API key (for web scraping):"; validate: required
- If provider === 'e2b': type: input; name: e2bApiKey; message: "E2B API key:"; validate: required
- If provider === 'vercel':
  - type: list; name: vercelAuthMethod; message: "Vercel authentication method:"; choices: [OIDC, PAT]
  - when PAT: type: input; name: vercelTeamId; message: "Vercel Team ID:"; validate: required
  - when PAT: type: input; name: vercelProjectId; message: "Vercel Project ID:"; validate: required
  - when PAT: type: input; name: vercelToken; message: "Vercel Access Token:"; validate: required

Optional AI provider keys:
- type: confirm; name: addAiKeys; message: "Would you like to add AI provider API keys?"; default: true
- type: checkbox; name: aiProviders; message: "Select AI providers to configure:"; choices: [Anthropic, OpenAI, Google, Groq]
- when selected: type: input; names: anthropicApiKey | openaiApiKey | geminiApiKey | groqApiKey; message: "<Provider> API key:"

