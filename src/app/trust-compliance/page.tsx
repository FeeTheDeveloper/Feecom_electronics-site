import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust & Compliance",
  description:
    "Feecom Electronics operates with strict adherence to business compliance, secure handling of electronics, and transparent customer transactions.",
};

const businessReadiness = [
  {
    title: "EIN Established",
    description: "Fully registered and tax compliant",
  },
  {
    title: "Business Bank Account",
    description: "Secured for transparent transactions",
  },
  {
    title: "Domain & Branded Email",
    description: "Professional communication channels",
  },
  { title: "E-Commerce Ready", description: "Structured for online scale" },
  {
    title: "Logistics Ready",
    description: "Shipping and fulfillment in place",
  },
];

export default function TrustCompliance() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-deep to-steel px-4 py-16">
        <Container>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Trust & Compliance
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Operating with integrity, transparency, and accountability in every
            transaction.
          </p>
        </Container>
      </section>

      {/* Main Compliance Section */}
      <section className="px-4 py-20">
        <Container>
          <SectionHeading
            title="Our Commitment"
            subtitle="Building trust through transparent business practices"
          />

          <Card padding="lg" className="mb-8">
            <p className="text-lg leading-relaxed text-white/80">
              Feecom Electronics & Exchange LLC operates with strict adherence
              to business compliance, secure handling of electronics, and
              transparent customer transactions. All inventory sourcing and
              sales are documented to support financial accountability and
              customer trust.
            </p>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card padding="lg">
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                Secure Transactions
              </h2>
              <p className="mb-4 text-white/70">
                Every purchase is protected with secure payment processing. We
                use industry-standard encryption and fraud protection to ensure
                your information stays safe.
              </p>
              <ul className="list-inside list-disc space-y-2 text-white/70">
                <li>Encrypted payment processing</li>
                <li>Fraud detection and prevention</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Clear refund and return policies</li>
              </ul>
            </Card>

            <Card padding="lg">
              <h2 className="mb-4 text-2xl font-semibold text-primary">
                Documented Sourcing
              </h2>
              <p className="mb-4 text-white/70">
                All inventory is acquired through verified channels with full
                documentation. We maintain records for accountability and can
                verify the origin of our products.
              </p>
              <ul className="list-inside list-disc space-y-2 text-white/70">
                <li>Verified supplier relationships</li>
                <li>Product authenticity checks</li>
                <li>Complete transaction records</li>
                <li>Quality inspection documentation</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Business Readiness */}
      <section className="bg-white/[0.02] px-4 py-20">
        <Container>
          <SectionHeading
            title="Business Readiness"
            subtitle="Structured and compliant for professional operations"
          />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {businessReadiness.map((item) => (
              <Card key={item.title} padding="md" className="text-center">
                <div className="mb-2 text-2xl">✓</div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Customer Trust */}
      <section className="px-4 py-20">
        <Container>
          <SectionHeading
            title="Customer Trust"
            subtitle="Your satisfaction and security are our priority"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <Card padding="lg" hover>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Quality Guarantee
              </h3>
              <p className="text-white/70">
                Every product is tested and inspected before shipping. We stand
                behind the quality of our inventory.
              </p>
            </Card>
            <Card padding="lg" hover>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Responsive Support
              </h3>
              <p className="text-white/70">
                Questions or concerns? Our team responds promptly to help
                resolve any issues.
              </p>
            </Card>
            <Card padding="lg" hover>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Clear Policies
              </h3>
              <p className="text-white/70">
                Transparent return, refund, and exchange policies. No surprises,
                no fine print.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <Container size="narrow">
          <Card
            padding="lg"
            className="bg-gradient-to-r from-deep/50 to-steel/50 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Questions About Our Practices?
            </h2>
            <p className="mb-6 text-white/70">
              We&apos;re happy to discuss our compliance standards and business
              practices.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
          </Card>
        </Container>
      </section>
    </div>
  );
}
