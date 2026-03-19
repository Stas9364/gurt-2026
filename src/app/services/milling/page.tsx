import type { Metadata } from "next";
import { MillingScreen } from "@/screens/services/MillingScreen";
import { millingData } from "@/data/services/milling";

export const metadata: Metadata = {
  title: millingData.meta.title,
  description: millingData.meta.description,
};

export default function Page() {
  return <MillingScreen />;
}
