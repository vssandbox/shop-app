"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabNavigationProps {
  listCount: number;
}

export default function TabNavigation({ listCount }: TabNavigationProps) {
  const pathname = usePathname();

  const tabs = [
    { href: "/", label: "Deals", icon: "🏷️" },
    { href: "/list", label: "List", icon: "🛒" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-inset-bottom">
      <div className="flex">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex-1 flex flex-col items-center py-3 relative ${
                isActive ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="text-xs mt-1">{tab.label}</span>
              {tab.href === "/list" && listCount > 0 && (
                <span className="absolute top-2 right-1/4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {listCount > 9 ? "9+" : listCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
