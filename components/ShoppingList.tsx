"use client";

import { ShoppingListItem as ShoppingListItemType } from "@/types";
import ShoppingListItem from "./ShoppingListItem";

interface ShoppingListProps {
  items: ShoppingListItemType[];
  onQuantityChange: (id: string, newQuantity: number) => void;
  cartTotal: number;
  itemCount: number;
}

export default function ShoppingList({
  items,
  onQuantityChange,
  cartTotal,
  itemCount
}: ShoppingListProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-gray-50 z-10 px-4 py-3 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Cart</h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto px-4 py-3 pb-40">
        {items.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">🛒</div>
            <p className="text-lg mb-2">Your cart is empty</p>
            <p className="text-sm">Add items from the Deals tab</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <ShoppingListItem
                key={item.id}
                item={item}
                onQuantityChange={onQuantityChange}
              />
            ))}
          </div>
        )}
      </div>

      {/* Checkout button - fixed at bottom above tab bar */}
      {items.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto">
            <button
              onClick={() => alert("Checkout coming soon!")}
              className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="bg-green-600 rounded-full px-2 py-0.5 text-sm">
                  {itemCount}
                </span>
                <span>Checkout</span>
              </span>
              <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
