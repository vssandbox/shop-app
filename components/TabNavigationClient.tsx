"use client";

import { useShoppingListContext } from "./ShoppingListProvider";
import TabNavigation from "./TabNavigation";

export default function TabNavigationClient() {
  const { items } = useShoppingListContext();
  return <TabNavigation listCount={items.length} />;
}
