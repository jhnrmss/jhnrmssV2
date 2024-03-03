import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AppHeader from "@/components/AppHeader";

export const metadata: Metadata = {
  title: "JhnrmssV2",
  description: "Personal Portfolio V2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className=" bg-slate-900 leading-relaxed antialiased">
        <div className="mx-auto min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 ">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="sticky top-0 ">
              <AppHeader />
            </header>

            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
