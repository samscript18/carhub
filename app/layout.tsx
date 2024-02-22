import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/context/index";

const manrope = Manrope({ style: ["normal"], subsets: ["greek"] });

export const metadata: Metadata = {
  title: "CarHub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${manrope.className} md:overflow-x-hidden`}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </AppProvider>
  );
}
