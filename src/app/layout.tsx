import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vajra Fitness | Built Different | P Gannavaram",
  description:
    "P Gannavaram's premier strength destination. Heavy power racks, calibrated plates, cardio and serious community.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${manrope.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
