export type Unit = "each" | "lb";

export interface Deal {
  id: string;
  name: string;
  basePrice: number;
  originalPrice?: number;
  imageUrl: string;
  unit: Unit;
  size?: string;
  isDiscounted?: boolean;
}

export interface ShoppingListItem extends Deal {
  quantity: number;
  addedAt: number;
}
