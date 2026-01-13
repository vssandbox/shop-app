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
    <div className="flex flex-col pb-24">
      {/* Hero Header */}
      <div className="px-5 pt-10 pb-8">
        <h1
          className="text-hero mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Today&apos;s Picks
        </h1>
        <p
          className="text-base"
          style={{ color: "var(--color-text-muted)" }}
        >
          Curated deals, just for you
        </p>
      </div>

      {/* Deal Cards */}
      <div className="flex flex-col gap-4 px-5">
        {deals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
            isInList={listItemIds.has(deal.id)}
            onAdd={onAddToList}
          />
        ))}
      </div>
    </div>
  );
}
