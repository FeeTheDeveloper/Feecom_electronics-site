import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
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
              Online Buyer, Seller & Distributor of Mobile Devices and
              Electronics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/70 transition hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products-services"
                  className="text-white/70 transition hover:text-primary"
                >
                  Products & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-white/70 transition hover:text-primary"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/trust-compliance"
                  className="text-white/70 transition hover:text-primary"
                >
                  Trust & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 transition hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="https://feecomelectronics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-primary"
                >
                  feecomelectronics.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@feecomelectronics.com"
                  className="transition hover:text-primary"
                >
                  contact@feecomelectronics.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14695477428"
                  className="transition hover:text-primary"
                >
                  469-547-7428
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between text-sm text-white/70 md:flex-row">
            <p>
              &copy; {currentYear} Feecom Electronics & Exchange LLC. All rights
              reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link href="#" className="transition hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="transition hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
