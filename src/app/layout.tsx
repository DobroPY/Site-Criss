import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "CXC Software — ERP Custom, Aplicații Mobile, Shopify & AI",
  description: "Software construit pe procesul tău. ERP custom, aplicații mobile, aplicații Shopify și automatizări AI pentru firme de construcții, transport și vânzări — livrate în 6–12 săptămâni.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior: smooth for in-page anchors, but instant jumps when changing pages.
    <html lang="ro" style={{ scrollBehavior: 'smooth' }} data-scroll-behavior="smooth">
      <body>
        {/* Shared by every page so the RO/EN choice survives navigation. */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
