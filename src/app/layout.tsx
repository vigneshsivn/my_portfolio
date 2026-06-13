import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

import CursorGlowProvider from "@/components/CursorGlowProvider";

export const metadata: Metadata = {
  title: "K. Vignesh | Matrimonial Portfolio & Premium Profile",
  description: "Matrimonial profile and professional showcase of K. Vignesh, Senior Software Developer at Accenture. Discover details regarding background, career, family, and values.",
  keywords: ["K. Vignesh", "Vignesh Matrimonial", "Accenture Software Developer", "Raju Matrimony", "Premium Biodata"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-base text-fg-base selection:bg-primary-blue/30">
        <ThemeProvider>
          <CursorGlowProvider>
            {children}
          </CursorGlowProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
