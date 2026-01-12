"use client";

import ShoppingList from "@/components/ShoppingList";
import { useShoppingListContext } from "@/components/ShoppingListProvider";

export default function ListPage() {
  const { items, removeItem, isLoaded } = useShoppingListContext();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return <ShoppingList items={items} onRemove={removeItem} />;
}
