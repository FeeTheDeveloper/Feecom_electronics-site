import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Feecom Electronics & Exchange LLC. Contact us for product inquiries, bulk orders, or partnership opportunities. Email: contact@feecomelectronics.com | Phone: 469-547-7428",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
