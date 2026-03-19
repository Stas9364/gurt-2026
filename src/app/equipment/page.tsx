import type { Metadata } from "next";
import { EquipmentScreen } from "@/screens/EquipmentScreen";
import { equipmentData } from "@/data/equipment";

export const metadata: Metadata = {
  title: equipmentData.meta.title,
  description: equipmentData.meta.description,
};

export default function Page() {
  return <EquipmentScreen />;
}
