import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WsButton from "@/components/WsButton";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La estación del Chipa",
  description: "Las mejores de Corrientes",
};

export const viewport: Viewport = {
  themeColor: "#f97317",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-419">
      <body className={inter.className}>
        <Header />
        {children}
        <WsButton tlf={3775413448} />
      </body>
    </html>
  );
}
