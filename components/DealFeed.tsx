"use client";

import { Deal } from "@/types";
import DealCard from "./DealCard";

interface DealFeedProps {
  deals: Deal[];
  listItemIds: Set<string>;
  onAddToList: (deal: Deal) => void;
}

export default function DealFeed({ deals, listItemIds, onAddToList }: DealFeedProps) {
  return (
    <div className="flex flex-col gap-3 p-4 pb-24">
      <h1 className="text-xl font-bold text-gray-900">Deals</h1>
      {deals.map((deal) => (
        <DealCard
          key={deal.id}
          deal={deal}
          isInList={listItemIds.has(deal.id)}
          onAdd={onAddToList}
        />
      ))}
    </div>
  );
}
