Source: lib/context-selector.ts (buildFileStructureSection)
Tool: AI SDK (provider-agnostic; used by `buildSystemPrompt`)

Template (placeholders filled at runtime):

## 🚨 EXISTING PROJECT FILES - DO NOT CREATE NEW FILES WITH SIMILAR NAMES 🚨

### ALL PROJECT FILES (${allFiles.length} files)
```
${allFiles}
```

### Component Files (USE THESE EXACT NAMES)
- ${componentName} → ${path} (${type})

### CRITICAL: Component Relationships
ALWAYS CHECK App.jsx FIRST to understand what components exist and how they're imported!

Common component overlaps to watch for:
- "nav" or "navigation" → Often INSIDE Header.jsx, not a separate file
- "menu" → Usually part of Header/Nav, not separate
- "logo" → Typically in Header, not standalone

When user says "nav" or "navigation":
1. First check if Header.jsx exists
2. Look inside Header.jsx for navigation elements
3. Only create Nav.jsx if navigation doesn't exist anywhere

Entry Point: ${manifest.entryPoint}

### Routes
- ${route.path} → ${route.component}

