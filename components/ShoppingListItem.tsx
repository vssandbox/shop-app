"use client";

import Image from "next/image";
import { ShoppingListItem as ShoppingListItemType } from "@/types";
import QuantityStepper from "./QuantityStepper";

interface ShoppingListItemProps {
  item: ShoppingListItemType;
  onQuantityChange: (id: string, newQuantity: number) => void;
}

export default function ShoppingListItem({ item, onQuantityChange }: ShoppingListItemProps) {
  const displayPrice = item.unit === "lb"
    ? `$${item.basePrice.toFixed(2)} / lb`
    : `$${item.basePrice.toFixed(2)}`;

  return (
    <div
      className="flex items-center py-4 gap-4"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover rounded-md"
          sizes="64px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-medium truncate"
          style={{ color: "var(--color-text-primary)" }}
        >
          {item.name}
        </p>
        <div className="flex items-center gap-2 mt-1">
          {item.size && (
            <span
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              {item.size}
            </span>
          )}
          {item.size && <span style={{ color: "var(--color-text-muted)" }}>·</span>}
          <span
            className="text-sm font-medium"
            style={{ color: item.isDiscounted ? "var(--color-discount)" : "var(--color-text-primary)" }}
          >
            {displayPrice}
          </span>
          {item.isDiscounted && item.originalPrice && (
            <span
              className="text-sm line-through"
              style={{ color: "var(--color-text-muted)" }}
            >
              ${item.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      <QuantityStepper
        value={item.quantity}
        unit={item.unit}
        onChange={(val) => onQuantityChange(item.id, val)}
      />
    </div>
  );
}
