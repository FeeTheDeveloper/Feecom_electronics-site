import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Feecom Electronics & Exchange LLC | Mobile Devices & Electronics",
    template: "%s | Feecom Electronics",
  },
  description:
    "Online Buyer, Seller & Distributor of Mobile Devices and Electronics. We source, purchase, refurbish, and resell devices through secure logistics nationwide.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "electronics",
    "mobile devices",
    "smartphones",
    "tablets",
    "wholesale electronics",
    "refurbished phones",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
  },
  twitter: {
    card: "summary",
    title: "Feecom Electronics & Exchange LLC | Mobile Devices & Electronics",
    description:
      "Online Buyer, Seller & Distributor of Mobile Devices and Electronics.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-bg text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
