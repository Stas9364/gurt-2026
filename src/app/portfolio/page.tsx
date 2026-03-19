import type { Metadata } from "next";
import { PortfolioScreen } from "@/screens/PortfolioScreen";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: portfolioData.meta.title,
  description: portfolioData.meta.description,
};

export default function Page() {
  return <PortfolioScreen />;
}
