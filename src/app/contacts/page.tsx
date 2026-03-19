import type { Metadata } from "next";
import { ContactsScreen } from "@/screens/ContactsScreen";
import { contactsData } from "@/data/contacts";

export const metadata: Metadata = {
  title: contactsData.meta.title,
  description: contactsData.meta.description,
};

export default function Page() {
  return <ContactsScreen />;
}
