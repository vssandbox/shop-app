"use client";

import Image from "next/image";
import { Deal } from "@/types";

interface DealCardProps {
  deal: Deal;
  isInList: boolean;
  onAdd: (deal: Deal) => void;
}

export default function DealCard({ deal, isInList, onAdd }: DealCardProps) {
  const displayPrice = deal.unit === "lb"
    ? `$${deal.basePrice.toFixed(2)} / lb`
    : `$${deal.basePrice.toFixed(2)}`;

  return (
    <div className="flex items-center bg-white rounded-xl shadow-sm p-3 gap-3">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={deal.imageUrl}
          alt={deal.name}
          fill
          className="object-cover rounded-lg"
          sizes="80px"
        />
        {deal.isDiscounted && (
          <span className="absolute -top-1 -left-1 text-lg">🔥</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              {deal.isDiscounted && deal.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${deal.originalPrice.toFixed(2)}
                </span>
              )}
              <p className={`text-lg font-bold ${deal.isDiscounted ? "text-red-500" : "text-green-600"}`}>
                {displayPrice}
              </p>
            </div>
            <p className="text-sm text-gray-800 truncate">{deal.name}</p>
            {deal.size && (
              <p className="text-xs text-gray-500">{deal.size}</p>
            )}
          </div>
          <button
            onClick={() => onAdd(deal)}
            disabled={isInList}
            className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-colors ${
              isInList
                ? "bg-green-100 text-green-500"
                : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
            }`}
            aria-label={isInList ? "Already in cart" : "Add to cart"}
          >
            {isInList ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}
