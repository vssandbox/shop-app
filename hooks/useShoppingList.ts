"use client";

import { useState, useEffect, useCallback } from "react";
import { Deal, ShoppingListItem } from "@/types";

const STORAGE_KEY = "shopping-list";

export function useShoppingList() {
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount (with migration for old data format)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Migrate old items that have 'price' instead of 'basePrice'
        const migrated = parsed.map((item: ShoppingListItem & { price?: number }) => ({
          ...item,
          basePrice: item.basePrice ?? item.price ?? 0,
          unit: item.unit ?? "each",
          quantity: item.quantity ?? 1,
        }));
        setItems(migrated);
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
      const initialQuantity = deal.unit === "lb" ? 1 : 1;
      const newItem: ShoppingListItem = {
        ...deal,
        quantity: initialQuantity,
        addedAt: Date.now(),
      };
      return [...prev, newItem];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }, []);

  const itemIds = new Set(items.map((item) => item.id));

  const cartTotal = items.reduce(
    (sum, item) => sum + item.basePrice * item.quantity,
    0
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    itemIds,
    isLoaded,
    addItem,
    removeItem,
    updateQuantity,
    cartTotal,
    itemCount,
  };
}
