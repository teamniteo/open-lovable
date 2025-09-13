Prompts Extraction Index

This folder collects all prompt templates and messages discovered in the repository. Each entry lists where it came from and which tool or library uses it.

- LLM prompts are used by the AI generation pipeline built on the AI SDK providers (OpenAI, Anthropic, Google Gemini, Groq) via `streamText` in `app/api/generate-ai-code-stream/route.ts` and helpers in `lib/context-selector.ts`.
- CLI prompts are used by Inquirer in the `create-open-lovable` package during project scaffolding.

Contents

- llm/
  - edit-examples.md — Example-based guidance for surgical code edits. Tool: AI SDK (provider-agnostic).
  - component-pattern-template.md — Template describing component naming patterns. Tool: AI SDK (provider-agnostic).
  - file-structure-template.md — Template for file structure/context section. Tool: AI SDK (provider-agnostic).
  - format-files-for-ai.md — Headers/warnings used when embedding file contents. Tool: AI SDK (provider-agnostic).
  - edit-instructions/
    - UPDATE_COMPONENT.md — Surgical edit rules for component updates. Tool: AI SDK (provider-agnostic).
    - ADD_FEATURE.md — Instructions for adding features. Tool: AI SDK (provider-agnostic).
    - FIX_ISSUE.md — Instructions for bug fixes. Tool: AI SDK (provider-agnostic).
    - UPDATE_STYLE.md — Surgical style-edit rules. Tool: AI SDK (provider-agnostic).
    - REFACTOR.md — Refactor guidance. Tool: AI SDK (provider-agnostic).
    - FULL_REBUILD.md — Full rebuild guidance. Tool: AI SDK (provider-agnostic).
    - ADD_DEPENDENCY.md — Dependency addition guidance. Tool: AI SDK (provider-agnostic).
  - generate-ai-code-stream/
    - search-based-surgical.md — Prompt used when exact file/line is located. Tool: AI SDK `streamText`.
    - search-based-general.md — Prompt used for broader search-based edits. Tool: AI SDK `streamText`.
    - base-constraints.md — Core system constraints and rules passed with context. Tool: AI SDK `streamText`.
- cli/
  - create-open-lovable.md — Inquirer prompts for scaffolding and env setup. Tool: Inquirer.

