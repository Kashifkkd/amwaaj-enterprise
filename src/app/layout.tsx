import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amwaaj enterprise",
  description:
    "Amwaaj Enterprise: Your trusted partner in the wholesale distribution of top-quality cold drinks. We offer a wide range of beverages, from globally renowned brands to satisfy every taste. Efficient service, competitive pricing, and reliable delivery—Amwaaj Enterprise keeps your shelves stocked and your customers refreshed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
