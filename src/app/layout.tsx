import type { Metadata } from "next";
import { Figtree, Mrs_Saint_Delafield } from "next/font/google";
import { site } from "@/data";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Footer } from "@/components/Footer";
// Allow side-effect import of CSS in this Next.js layout file for bundling.
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const signature = Mrs_Saint_Delafield({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: site.site.meta.title,
  description: site.site.meta.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${signature.variable} antialiased`}>
        <SmoothScroll />
        <div className="w-full bg-white">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
