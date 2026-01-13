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
    <div
      className="rounded-lg p-4 transition-all duration-150"
      style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      {/* Image - large, poster-like */}
      <div className="relative w-full aspect-[4/3] mb-4">
        <Image
          src={deal.imageUrl}
          alt={deal.name}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 448px) 100vw, 400px"
        />
        {deal.isDiscounted && (
          <span
            className="absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-full"
            style={{
              backgroundColor: "var(--color-discount)",
              color: "white"
            }}
          >
            Sale
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Product name */}
        <h3
          className="font-semibold text-base leading-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          {deal.name}
        </h3>

        {/* Size/variant */}
        {deal.size && (
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            {deal.size}
          </p>
        )}

        {/* Price row */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span
              className="text-lg font-bold"
              style={{ color: deal.isDiscounted ? "var(--color-discount)" : "var(--color-text-primary)" }}
            >
              {displayPrice}
            </span>
            {deal.isDiscounted && deal.originalPrice && (
              <span
                className="text-sm line-through"
                style={{ color: "var(--color-text-muted)" }}
              >
                ${deal.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => onAdd(deal)}
            disabled={isInList}
            className="w-10 h-10 rounded-full flex items-center justify-center text-base font-semibold transition-all duration-150"
            style={{
              backgroundColor: isInList ? "var(--color-border)" : "var(--color-accent)",
              color: isInList ? "var(--color-text-muted)" : "white",
              cursor: isInList ? "default" : "pointer",
            }}
            aria-label={isInList ? "Added to cart" : "Add to cart"}
          >
            {isInList ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}
