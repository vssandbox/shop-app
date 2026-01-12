"use client";

import Image from "next/image";
import { ShoppingListItem as ShoppingListItemType } from "@/types";

interface ShoppingListItemProps {
  item: ShoppingListItemType;
  onRemove: (id: string) => void;
}

export default function ShoppingListItem({ item, onRemove }: ShoppingListItemProps) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm p-3 gap-3">
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
        <p className="text-sm text-gray-800 truncate">{item.name}</p>
        <p className="text-base font-bold text-green-600">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 active:bg-red-300 transition-colors"
        aria-label="Remove from list"
      >
        ✕
      </button>
    </div>
  );
}
