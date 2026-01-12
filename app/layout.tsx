import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ShoppingListProvider } from "@/components/ShoppingListProvider";
import TabNavigationClient from "@/components/TabNavigationClient";

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
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <ShoppingListProvider>
          <main className="max-w-md mx-auto bg-gray-50 min-h-screen">
            {children}
          </main>
          <TabNavigationClient />
        </ShoppingListProvider>
      </body>
    </html>
  );
}
