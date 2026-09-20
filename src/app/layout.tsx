import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Tist N Taste Kuttys | South Indian Restaurant in OMR, Chennai",
  description: "Discover flavorful biryanis, grilled chicken, South Indian favorites, and more at Tist N Taste Kuttys in Thoraipakkam, OMR, Chennai. Dine-in, takeaway, and delivery options available.",
  keywords: "Tist N Taste Kuttys, Restaurants in Thoraipakkam, South Indian restaurant OMR, Grilled chicken OMR, Biryani in Thoraipakkam, Restaurants near Mettukuppam, Food near OMR Chennai",
  openGraph: {
    title: "Tist N Taste Kuttys | South Indian Restaurant in OMR",
    description: "Your neighborhood destination for satisfying South Indian meals, flavorful biryani, grilled favorites, and late-evening food cravings in OMR.",
    type: "website",
    locale: "en_IN",
    url: "https://tistntastekuttys.com",
    siteName: "Tist N Taste Kuttys",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-charcoal text-warmIvory antialiased selection:bg-burntOrange selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
