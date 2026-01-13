import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingListProvider } from "@/components/ShoppingListProvider";
import TabNavigationClient from "@/components/TabNavigationClient";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shop App",
  description: "Discover deals and build your shopping list",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
        <ShoppingListProvider>
          <main className="max-w-md mx-auto min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
            {children}
          </main>
          <TabNavigationClient />
        </ShoppingListProvider>
      </body>
    </html>
  );
}
