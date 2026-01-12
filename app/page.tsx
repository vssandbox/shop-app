"use client";

import DealFeed from "@/components/DealFeed";
import { mockDeals } from "@/data/mockDeals";
import { useShoppingListContext } from "@/components/ShoppingListProvider";

export default function DealsPage() {
  const { itemIds, addItem, isLoaded } = useShoppingListContext();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return <DealFeed deals={mockDeals} listItemIds={itemIds} onAddToList={addItem} />;
}
