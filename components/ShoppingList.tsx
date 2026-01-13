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
      {/* Hero Header */}
      <div className="px-5 pt-10 pb-6">
        <h1
          className="text-hero mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Your Cart
        </h1>
        {items.length > 0 && (
          <p
            className="text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            {items.length} {items.length === 1 ? "item" : "items"} · ${cartTotal.toFixed(2)}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pb-40">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p
              className="text-lg font-medium mb-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              Your cart is empty
            </p>
            <p
              className="text-base"
              style={{ color: "var(--color-text-muted)" }}
            >
              Add items from the Deals tab
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
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

      {/* Checkout button */}
      {items.length > 0 && (
        <div
          className="fixed bottom-16 left-0 right-0 p-5"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          <div className="max-w-md mx-auto">
            <button
              onClick={() => alert("Checkout coming soon!")}
              className="w-full py-4 px-6 rounded-lg flex items-center justify-center gap-2 font-semibold text-base transition-all duration-150"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "white",
              }}
            >
              <span>Checkout</span>
              <span>·</span>
              <span>${cartTotal.toFixed(2)}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
