import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LazyMotionProvider } from "@/components/providers/LazyMotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "ГУРТ — Точная механообработка",
    template: "%s | ГУРТ",
  },
  description:
    "Производство деталей любой сложности методами точения, фрезерования и шлифования. Допуски до 0.01 мм. Беларусь, Могилёв.",
  keywords: ["механообработка", "токарные работы", "фрезерование", "ЧПУ", "металлообработка", "Могилёв"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LazyMotionProvider>{children}</LazyMotionProvider>
      </body>
    </html>
  );
}
