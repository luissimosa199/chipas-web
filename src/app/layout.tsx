import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WsButton from "@/components/WsButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La estación del Chipa",
  description: "Las mejores de Corrientes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-419">
      <body className={inter.className}>{children}</body>
      <WsButton tlf={3775413448} />
    </html>
  );
}
