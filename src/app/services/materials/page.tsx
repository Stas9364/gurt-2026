import type { Metadata } from "next";
import { MaterialsScreen } from "@/screens/services/MaterialsScreen";
import { materialsData } from "@/data/services/materials";

export const metadata: Metadata = {
  title: materialsData.meta.title,
  description: materialsData.meta.description,
};

export default function Page() {
  return <MaterialsScreen />;
}
