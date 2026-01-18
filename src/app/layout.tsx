import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Feecom Electronics & Exchange LLC | Mobile Devices & Electronics",
    template: "%s | Feecom Electronics",
  },
  description: "Online Buyer, Seller & Distributor of Mobile Devices and Electronics. We source, purchase, refurbish, and resell devices through secure logistics nationwide.",
  keywords: ["electronics", "mobile devices", "smartphones", "tablets", "wholesale electronics", "refurbished phones"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Feecom Electronics & Exchange LLC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-bg text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
