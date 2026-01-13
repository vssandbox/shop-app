"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabNavigationProps {
  listCount: number;
}

export default function TabNavigation({ listCount }: TabNavigationProps) {
  const pathname = usePathname();

  const tabs = [
    { href: "/", label: "Deals" },
    { href: "/list", label: "Cart" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0"
      style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="max-w-md mx-auto flex">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex-1 flex flex-col items-center py-4 relative transition-colors duration-150"
            >
              <span
                className="text-sm font-medium"
                style={{
                  color: isActive ? "var(--color-text-primary)" : "var(--color-text-muted)"
                }}
              >
                {tab.label}
                {tab.href === "/list" && listCount > 0 && (
                  <span
                    className="ml-1.5 text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    ({listCount})
                  </span>
                )}
              </span>
              {/* Active indicator dot */}
              {isActive && (
                <span
                  className="absolute bottom-2 w-1 h-1 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
