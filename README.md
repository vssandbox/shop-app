# Shop App

A shopping feed web app where users can discover deals and build their shopping list. Data persists in the browser via localStorage.

## Live Demo

https://shop-app-mu-one.vercel.app

## Features

- **Deal Feed** - Browse items with images, prices, and names
- **Shopping List** - Add items from the feed, view total, remove items
- **Bottom Tab Navigation** - Switch between Deals and List tabs with badge indicator
- **Persistent Storage** - Shopping list survives page refresh using localStorage

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Deploy to Vercel

```bash
npx vercel
```

## Project Structure

```
shop-app/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Deals feed (home)
│   ├── list/page.tsx       # Shopping list
│   └── globals.css         # Global styles
├── components/
│   ├── DealCard.tsx        # Individual deal item
│   ├── DealFeed.tsx        # Feed container
│   ├── ShoppingList.tsx    # List container
│   ├── ShoppingListItem.tsx# List item
│   ├── TabNavigation.tsx   # Bottom tab bar
│   ├── TabNavigationClient.tsx
│   └── ShoppingListProvider.tsx # Context provider
├── hooks/
│   └── useShoppingList.ts  # localStorage persistence
├── data/
│   └── mockDeals.ts        # Sample deal data
└── types/
    └── index.ts            # TypeScript interfaces
```
