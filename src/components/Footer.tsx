import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/assets/feecom-logo.svg"
                alt="Feecom Electronics"
                width={110}
                height={26}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-sm text-white/70">
              Online Buyer, Seller & Distributor of Mobile Devices and Electronics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products-services"
                  className="text-white/70 hover:text-primary transition"
                >
                  Products & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-white/70 hover:text-primary transition"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/trust-compliance"
                  className="text-white/70 hover:text-primary transition"
                >
                  Trust & Compliance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://feecomelectronics.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  feecomelectronics.com
                </a>
              </li>
              <li>
                <a href="mailto:contact@feecomelectronics.com" className="hover:text-primary transition">
                  contact@feecomelectronics.com
                </a>
              </li>
              <li>
                <a href="tel:+14695477428" className="hover:text-primary transition">
                  469-547-7428
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>
              &copy; {currentYear} Feecom Electronics & Exchange LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
