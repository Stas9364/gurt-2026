import type { Metadata } from "next";
import { TurningScreen } from "@/screens/services/TurningScreen";
import { turningData } from "@/data/services/turning";

export const metadata: Metadata = {
  title: turningData.meta.title,
  description: turningData.meta.description,
};

export default function Page() {
  return <TurningScreen />;
}
