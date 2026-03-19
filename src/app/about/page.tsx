import type { Metadata } from "next";
import { AboutScreen } from "@/screens/AboutScreen";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: aboutData.meta.title,
  description: aboutData.meta.description,
};

export default function Page() {
  return <AboutScreen />;
}
