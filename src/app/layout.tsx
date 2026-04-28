import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S&M Fencing and Decking — Built to Last. Built Right.",
  description:
    "S&M Fencing and Decking installs aluminum, chain link, custom wood and metal fences, automatic gates, ranch rail, dog fences, porches, and decks. Free quotes, expert craftsmanship.",
  openGraph: {
    title: "S&M Fencing and Decking",
    description:
      "Custom fences, gates, decks, and porches. Built to last by a local crew that takes pride in every post.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
