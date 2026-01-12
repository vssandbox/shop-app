"use client";

import { createContext, useContext, ReactNode } from "react";
import { useShoppingList } from "@/hooks/useShoppingList";
import { Deal, ShoppingListItem } from "@/types";

interface ShoppingListContextType {
  items: ShoppingListItem[];
  itemIds: Set<string>;
  isLoaded: boolean;
  addItem: (deal: Deal) => void;
  removeItem: (id: string) => void;
}

const ShoppingListContext = createContext<ShoppingListContextType | null>(null);

export function ShoppingListProvider({ children }: { children: ReactNode }) {
  const shoppingList = useShoppingList();

  return (
    <ShoppingListContext.Provider value={shoppingList}>
      {children}
    </ShoppingListContext.Provider>
  );
}

export function useShoppingListContext() {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error(
      "useShoppingListContext must be used within a ShoppingListProvider"
    );
  }
  return context;
}
