"use client";

import Image from "next/image";
import { Deal } from "@/types";

interface DealCardProps {
  deal: Deal;
  isInList: boolean;
  onAdd: (deal: Deal) => void;
}

export default function DealCard({ deal, isInList, onAdd }: DealCardProps) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm p-3 gap-3">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={deal.imageUrl}
          alt={deal.name}
          fill
          className="object-cover rounded-md"
          sizes="80px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-lg font-bold text-green-600">
              ${deal.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-800 truncate">{deal.name}</p>
          </div>
          <button
            onClick={() => onAdd(deal)}
            disabled={isInList}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-colors ${
              isInList
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
            }`}
            aria-label={isInList ? "Already in list" : "Add to list"}
          >
            {isInList ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}
