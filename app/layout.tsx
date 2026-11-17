import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kadr — Azərbaycan kinosu",
  description: "Azərbaycan kinosunun klassik və müasir filmlərini kəşf et.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="az"><body>{children}</body></html>;
}
