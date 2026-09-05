import type { Metadata } from "next";
import { AppShell } from "./app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netbalance Revenue Recovery Agent",
  description: "A synthetic closed-loop revenue recovery demonstration.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><AppShell>{children}</AppShell></body>
    </html>
  );
}
