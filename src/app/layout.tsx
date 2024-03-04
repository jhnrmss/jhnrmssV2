import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { twMerge } from "tailwind-merge";
import { AppEmail, AppFooter, AppNavigation, AppSocials } from "@/components";

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

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
      <body
        className={twMerge(
          poppins.className,
          "container mx-auto px-10 md:px-16 lg:px-28 ease-in-out duration-300"
        )}
      >
        <main>
          <AppNavigation />
          <AppSocials />
          <AppEmail />
          <div className="relative h-screen min-h-screen w-full">
            {children}
            <AppFooter />
          </div>
        </main>
      </body>
    </html>
  );
}
