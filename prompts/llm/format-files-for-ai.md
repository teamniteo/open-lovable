Source: lib/context-selector.ts (formatFilesForAI)
Tool: AI SDK (provider-agnostic; used to embed files in LLM context)

Headers and Warnings:

## Files to Edit (ONLY OUTPUT THESE FILES)
🚨 You MUST ONLY generate the files listed below. Do NOT generate any other files! 🚨
⚠️ CRITICAL: Return the COMPLETE file - NEVER truncate with "..." or skip any lines! ⚠️
The file MUST include ALL imports, ALL functions, ALL JSX, and ALL closing tags.

For each primary file, content is wrapped as:

### ${path}
IMPORTANT: This is the COMPLETE file. Your output must include EVERY line shown below, modified only where necessary.
```<ext derived from path>
${content}
```

If context files are included:

## Context Files (Reference Only - Do Not Edit)
```<ext derived from path>
${possiblyTruncatedContent}
```

