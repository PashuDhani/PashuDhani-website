
import "./../styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PashuDhani – Livestock Made Simple",
  description: "Discover cattle melas, register, tag, insure and manage livestock easily."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable + " font-sans bg-gray-50 text-gray-900"}>
        {children}
      </body>
    </html>
  );
}
