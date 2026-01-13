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
    <div className="flex items-center bg-white rounded-xl shadow-sm p-3 gap-3">
      <div className="relative w-[60px] h-[60px] flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
          sizes="60px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
        {item.size && (
          <p className="text-xs text-gray-500">{item.size}</p>
        )}
        <div className="flex items-center gap-2 mt-1">
          {item.isDiscounted && (
            <>
              <span className="text-sm">🔥</span>
              <span className="text-xs text-gray-400 line-through">
                ${item.originalPrice?.toFixed(2)}
              </span>
            </>
          )}
          <span className={`text-sm font-bold ${item.isDiscounted ? "text-red-500" : "text-gray-900"}`}>
            {displayPrice}
          </span>
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
