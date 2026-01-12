"use client";

import { useState, useEffect, useCallback } from "react";
import { Deal, ShoppingListItem } from "@/types";

const STORAGE_KEY = "shopping-list";

export function useShoppingList() {
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load shopping list:", error);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch (error) {
        console.error("Failed to save shopping list:", error);
      }
    }
  }, [items, isLoaded]);

  const addItem = useCallback((deal: Deal) => {
    setItems((prev) => {
      // Prevent duplicates
      if (prev.some((item) => item.id === deal.id)) {
        return prev;
      }
      const newItem: ShoppingListItem = {
        ...deal,
        addedAt: Date.now(),
      };
      return [...prev, newItem];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const itemIds = new Set(items.map((item) => item.id));

  return {
    items,
    itemIds,
    isLoaded,
    addItem,
    removeItem,
  };
}
