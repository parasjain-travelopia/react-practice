/** @format */

import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";

export const metadata: Metadata = {
  title: "react-poc",
  description: "Practice Tailwind",
};
const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
