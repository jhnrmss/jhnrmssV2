import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

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
    <html lang="en">
      <body className="flex flex-col lg:flex-row lg:justify-between items-center md:p-46 p-36 mx-auto">
        <header className="sticky top-0">testHeader</header>

        <main>{children}</main>
      </body>
    </html>
  );
}
