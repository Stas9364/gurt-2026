import type { Metadata } from "next";
import { CustomScreen } from "@/screens/services/CustomScreen";
import { customData } from "@/data/services/custom";

export const metadata: Metadata = {
  title: customData.meta.title,
  description: customData.meta.description,
};

export default function Page() {
  return <CustomScreen />;
}
