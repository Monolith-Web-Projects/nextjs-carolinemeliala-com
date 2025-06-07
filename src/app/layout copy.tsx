// src/app/layout.tsx
import type { Metadata } from "next";
import { ebGaramond, comorantGaramond } from "./fonts";
import "./globals.css";
import Navbar from "@/components/parts/Navbar";

export const metadata: Metadata = {
  title: "Caroline Meliala",
  description: "carolinemeliala.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${comorantGaramond.variable}`}
    >
      <body className="antialiased">
        <div className="block sm:grid grid-cols-[0.5fr_2.5fr] grid-rows-[auto_1fr_auto] min-h-screen font-eb">
          <header className="p-4 h-80 sm:h-full">
            <Navbar></Navbar>
          </header>
          <main className="min-h-screen sm:mt-15 mt-0">{children}</main>
          <footer className="w-full h-10  col-span-2">FOOTER</footer>
        </div>
      </body>
    </html>
  );
}
