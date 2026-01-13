# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npx vercel       # Deploy to Vercel
```

## Architecture

This is a Next.js 16 App Router application with Tailwind CSS 4.

### State Management

Shopping list state is managed via React Context (`ShoppingListProvider`) with localStorage persistence:
- `useShoppingList` hook handles localStorage read/write with data migration
- `ShoppingListProvider` wraps the app in `layout.tsx` and exposes state to all pages
- `useShoppingListContext` hook consumes the context in components

### Routing

- `/` - Deals feed (app/page.tsx)
- `/list` - Shopping cart (app/list/page.tsx)
- Bottom tab navigation is rendered in the root layout

### Data Flow

1. Mock deals defined in `data/mockDeals.ts`
2. DealFeed renders DealCard components with an "add" button
3. Adding an item calls `addItem` from context, which updates state and localStorage
4. ShoppingList reads items from context and renders ShoppingListItem components
5. Tab badge count reflects `itemCount` from context

### Types

All TypeScript interfaces are in `types/index.ts`:
- `Deal` - id, name, basePrice, originalPrice, imageUrl, unit, size, isDiscounted
- `ShoppingListItem` - extends Deal with quantity and addedAt timestamp

### Theming

CSS custom properties defined in `app/globals.css`:
- `--color-background`, `--color-surface`, `--color-accent`, `--color-discount`
- `--color-text-primary`, `--color-text-muted`, `--color-border`

## Linting, Debugging, Profiling Workflow

When running "analyze", "lint", "debug", or "profile", follow this workflow:

### 1. Context Scan
- Map structure via `ls`, file discovery
- Identify tech stack from package.json
- State assumptions (Node version, framework)

### 2. Linting Pass
- Scan key files (app/, components/, hooks/) for style/safety issues
- Checklist: Style, Correctness, Types, Security
- Include line refs and fixes

### 3. Debugging Pass
- Hunt logic bugs, async races, edge cases
- Prioritize by impact
- Suggest patches with file paths

### 4. Profiling Pass
- Analyze hot paths: O(N) loops, renders, re-renders
- Quick wins: memoization, lazy loads
- Provide optimized snippets

### 5. Verification
- Suggest tests for fixes

### Output Format

```
## Context
...
## Linting Fixes
...
## Debug Fixes
...
## Perf Optimizations
...
## Tests
...
```

### Slash Commands

- `/lint` - Full lint pass
- `/debug` - Bugs only
- `/profile` - Perf only
- `/all` - Full workflow
