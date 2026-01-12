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
- `useShoppingList` hook handles localStorage read/write
- `ShoppingListProvider` wraps the app in `layout.tsx` and exposes state to all pages
- `useShoppingListContext` hook consumes the context in components

### Routing

- `/` - Deals feed (app/page.tsx)
- `/list` - Shopping list (app/list/page.tsx)
- Bottom tab navigation is rendered in the root layout

### Data Flow

1. Mock deals defined in `data/mockDeals.ts`
2. DealFeed renders DealCard components with an "add" button
3. Adding an item calls `addItem` from context, which updates state and localStorage
4. ShoppingList reads items from context and renders ShoppingListItem components
5. Tab badge count reflects `items.length` from context

### Types

All TypeScript interfaces are in `types/index.ts`:
- `Deal` - id, name, price, imageUrl
- `ShoppingListItem` - extends Deal with addedAt timestamp
