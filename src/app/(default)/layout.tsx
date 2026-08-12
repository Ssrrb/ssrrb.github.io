import Navbar from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../../messages/en.json";

export default function DefaultLocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider
      locale="en"
      messages={messages}
      formats={{}}
      now={new Date(0)}
      timeZone="America/Asuncion"
    >
      {children}
      <Navbar />
    </NextIntlClientProvider>
  );
}
