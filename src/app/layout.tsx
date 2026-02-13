import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AEC – Audit Énergétique Conseil",
  description: "Expertise réglementaire et technique pour vos projets de rénovation énergétique.",
  keywords: ["Audit Énergétique", "Rénovation", "Décret Tertiaire", "AMO", "CVC", "Efficacité Énergétique"],
  authors: [{ name: "AEC Conseil" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://aec-conseil.fr",
    title: "AEC – Audit Énergétique Conseil",
    description: "Expertise réglementaire et technique pour vos projets de rénovation énergétique.",
    siteName: "AEC Conseil",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEC – Audit Énergétique Conseil",
    description: "Expertise réglementaire et technique pour vos projets de rénovation énergétique.",
  },
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
