"use client";

import { useShoppingListContext } from "./ShoppingListProvider";
import TabNavigation from "./TabNavigation";

export default function TabNavigationClient() {
  const { itemCount } = useShoppingListContext();
  return <TabNavigation listCount={itemCount} />;
}
