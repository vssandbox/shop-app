"use client";

import { ShoppingListItem as ShoppingListItemType } from "@/types";
import ShoppingListItem from "./ShoppingListItem";

interface ShoppingListProps {
  items: ShoppingListItemType[];
  onRemove: (id: string) => void;
}

export default function ShoppingList({ items, onRemove }: ShoppingListProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col gap-3 p-4 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Shopping List</h1>
        {items.length > 0 && (
          <p className="text-sm text-gray-500">{items.length} item{items.length !== 1 ? "s" : ""}</p>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg mb-2">Your list is empty</p>
          <p className="text-sm">Add items from the Deals tab</p>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <ShoppingListItem key={item.id} item={item} onRemove={onRemove} />
          ))}
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Total</span>
              <span className="text-xl font-bold text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
