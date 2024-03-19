import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";

const inter = Inter({ subsets: ["latin"] });

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
